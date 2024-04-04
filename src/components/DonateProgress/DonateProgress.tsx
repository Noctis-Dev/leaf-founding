import Milestone from "./Milestone"

function DonateProgress() {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-green-500 pr-8 pl-8">
          Meta 900,000 $
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-4 py-8 pr-8 pl-8 flex items-center">
        <Milestone />
        <Milestone />
        <Milestone />
        <Milestone />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white pr-8 pl-8">
            445.4377 $
          </h1>
          <h5 className=" font-light text-white pr-8 pl-8 ">
            Contribuciones en pesos MX
          </h5>
        </div>
      </div>
    </div>
  )
}

export default DonateProgress