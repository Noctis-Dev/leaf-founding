import { Progress } from "flowbite-react";

const myTheme = {
  color: {
    green: "bg-green-500",
  },
  size: {
    xl: "h-10"
  },
  bar: "rounded-1",
  base: "w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700"
};


function Milestone() {
  return (
    <div className="">
      <Progress theme={myTheme} color="green" progress={8} size="xl"/>
    </div>
  )
}

export default Milestone