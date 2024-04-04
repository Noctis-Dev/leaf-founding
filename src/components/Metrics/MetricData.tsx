
type MetricDataProps = {
  metric: string,
  desc: string,
  img: string
}

function MetricData({metric, desc, img}: MetricDataProps) {
  return (
    <div className="text-white text-center flex flex-col items-center justify-center">
      <img src={img} alt="" className="w-12 h-12"/>
      <h2 className="text-2xl font-bold mt-2 mb-1">{metric}</h2>
      <h3 className="text-md font-semibold">{desc}</h3>
    </div>
  )
}

export default MetricData