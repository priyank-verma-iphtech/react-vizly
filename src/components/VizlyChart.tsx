import React,{
  useEffect,
  useRef,
  useMemo,
  forwardRef,
  useImperativeHandle
  } from "react"
  
  import ApexCharts from "apexcharts"
  
  import { detectChartType } from "../utils/detectChartType"
  import { transformData } from "../utils/transformData"
  
  export interface VizlyProps{
   data:any[]
   type?:string
   options?:any
   height?:number|string
  }
  
  export interface VizlyRef{
   zoomIn:()=>void
   zoomOut:()=>void
   reset:()=>void
  }
  
  const VizlyChart = forwardRef<VizlyRef,VizlyProps>(
  
  ({data,type,options={},height=350},ref)=>{
  
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstance = useRef<ApexCharts | null>(null)
  
  const finalType = useMemo(()=>{
   if(type) return type
   return detectChartType(data)
  },[data,type])
  
  const config = useMemo(()=>{
  
   const t = finalType.toLowerCase()
  
   const {series,labels,categories} = transformData(t,data)
  
   const cfg:any = {
  
    ...options,
  
    chart:{
     ...options.chart,
     type: t === "column" ? "bar" : t,
     height
    },
  
    series
   }
  
   if(labels?.length) cfg.labels = labels
  
   if(categories?.length)
     cfg.xaxis = { categories }
  
   if(t === "bar" || t === "column"){
     cfg.plotOptions = { bar:{horizontal:false} }
   }
  
   return cfg
  
  },[data,finalType])
  
  useImperativeHandle(ref,()=>({
  
   zoomIn(){
    const chart:any = chartInstance.current
    if(!chart?.w?.globals) return
    const {minX,maxX}=chart.w.globals
    const diff=(maxX-minX)*0.1
    chart.zoomX(minX+diff,maxX-diff)
   },
  
   zoomOut(){
    const chart:any = chartInstance.current
    if(!chart?.w?.globals) return
    const {minX,maxX}=chart.w.globals
    const diff=(maxX-minX)*0.1
    chart.zoomX(minX-diff,maxX+diff)
   },
  
   reset(){
    chartInstance.current?.resetSeries()
   }
  
  }))
  
  useEffect(()=>{
  
   if(!chartRef.current) return
  
   if(chartInstance.current){
  
     chartInstance.current.updateOptions(config)
  
   } else {
  
     chartInstance.current = new ApexCharts(chartRef.current,config)
     chartInstance.current.render()
  
   }
  
   return ()=>{
    chartInstance.current?.destroy()
    chartInstance.current = null
   }
  
  },[config])
  
  return <div ref={chartRef}/>
  
  })
  
  export default VizlyChart