import React,{
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  useMemo
  } from "react"
  
  import ApexCharts from "apexcharts"
  
  import { CiZoomIn,CiZoomOut,CiMaximize1,CiRead } from "react-icons/ci"
  import { RxCross1 } from "react-icons/rx"
  
  import { detectChartType } from "../utils/detectChartType"
  import { transformData } from "../utils/transformData"
  
  export interface VizlyProps{
   data:any[]
   type?:string
   options?:any
   height?:number|string
   title?:string
  }
  
  export interface VizlyRef{
   zoomIn:()=>void
   zoomOut:()=>void
   reset:()=>void
   download:(format:"png"|"csv"|"svg")=>void
  }
  
  const VizlyChart = forwardRef<VizlyRef,VizlyProps>(
  
  ({data,type,options={},height=350,title="Vizly Chart"},ref)=>{
  
  const chartRef=useRef<HTMLDivElement>(null)
  const modalRef=useRef<HTMLDivElement>(null)
  
  const chartInstance=useRef<ApexCharts|null>(null)
  const modalInstance=useRef<ApexCharts|null>(null)
  
  const[showModal,setShowModal]=useState(false)
  
  const finalType=useMemo(()=>{
   if(type) return type
   return detectChartType(data)
  },[data,type])
  
  const buildConfig=(incomingData:any[],h:number|string)=>{
  
   const t=finalType.toLowerCase()
  
   const {series,labels,categories}=transformData(t,incomingData)
  
   return{
  
    ...options,
  
    chart:{
     ...options.chart,
     type:t==="column"?"bar":t,
     height:h,
     toolbar:{show:false}
    },
  
    series,
  
    labels,
  
    xaxis:categories
     ?{categories}
     :options.xaxis
  
   }
  
  }
  
  useImperativeHandle(ref,()=>({
  
   zoomIn(){
    const chart:any=chartInstance.current
    if(!chart?.w?.globals) return
    const {minX,maxX}=chart.w.globals
    const diff=(maxX-minX)*0.1
    chart.zoomX(minX+diff,maxX-diff)
   },
  
   zoomOut(){
    const chart:any=chartInstance.current
    if(!chart?.w?.globals) return
    const {minX,maxX}=chart.w.globals
    const diff=(maxX-minX)*0.1
    chart.zoomX(minX-diff,maxX+diff)
   },
  
   reset(){
    chartInstance.current?.resetSeries()
   },
  
   download(format){
  
    const chart:any=chartInstance.current
  
    if(!chart?.exports) return
  
    const fileName=title
  
    if(format==="csv") chart.exports.exportToCSV({fileName})
    else if(format==="svg") chart.exports.exportToSvg({fileName})
    else chart.exports.exportToPng({fileName})
  
   }
  
  }))
  
  useEffect(()=>{
  
   if(!chartRef.current) return
  
   const config=buildConfig(data,height)
  
   if(chartInstance.current){
    chartInstance.current.updateOptions(config)
   }
   else{
    chartInstance.current=new ApexCharts(chartRef.current,config)
    chartInstance.current.render()
   }
  
   return()=>{
    chartInstance.current?.destroy()
    chartInstance.current=null
   }
  
  },[data,finalType])
  
  useEffect(()=>{
  
   if(showModal && modalRef.current){
  
    const config=buildConfig(data,"100%")
  
    modalInstance.current=new ApexCharts(modalRef.current,config)
  
    modalInstance.current.render()
  
   }
  
   return()=>{
    modalInstance.current?.destroy()
    modalInstance.current=null
   }
  
  },[showModal])
  
  return(
  
  <div style={{border:"1px solid #e2e8f0",borderRadius:12}}>
  
  <div style={{
  display:"flex",
  justifyContent:"space-between",
  padding:10,
  background:"#f8fafc"
  }}>
  
  <span>{title}</span>
  
  <div style={{display:"flex",gap:6}}>
  
  <button onClick={()=> (ref as any)?.current?.zoomIn()}>
  <CiZoomIn/>
  </button>
  
  <button onClick={()=> (ref as any)?.current?.zoomOut()}>
  <CiZoomOut/>
  </button>
  
  <button onClick={()=> (ref as any)?.current?.reset()}>
  <CiRead/>
  </button>
  
  <button onClick={()=>setShowModal(true)}>
  <CiMaximize1/>
  </button>
  
  </div>
  
  </div>
  
  <div ref={chartRef}/>
  
  {showModal &&(
  
  <div style={{
  position:"fixed",
  inset:0,
  background:"rgba(0,0,0,0.8)",
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
  }}>
  
  <div style={{
  width:"90vw",
  height:"90vh",
  background:"#fff",
  padding:20
  }}>
  
  <div style={{display:"flex",justifyContent:"space-between"}}>
  
  <h3>{title}</h3>
  
  <button onClick={()=>setShowModal(false)}>
  <RxCross1/>
  </button>
  
  </div>
  
  <div style={{height:"100%"}} ref={modalRef}/>
  
  </div>
  
  </div>
  
  )}
  
  </div>
  
  )
  
  })
  
  export default VizlyChart