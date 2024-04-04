import { useState } from "react";
import DrawerManage from "../../components/DrawerManage/DrawerManage";
import GridCards from "../../components/GridCards/GridCards";
import MetricPage from "./MetricPage";

function ManageProjects() {

  const [page, setPage] = useState("manage")

  console.log(page)

  const pageComponentMap: { [key: string]: JSX.Element } = {
    manage: <GridCards nav={setPage} />,
    donated: <GridCards nav={setPage} />,
    activity: <GridCards nav={setPage} />,
    metrics: <MetricPage />
  };

  return (
    <div className="flex flex-row">
      <DrawerManage nav={setPage} />
      {pageComponentMap[page]}
    </div>
  );
}

export default ManageProjects;
