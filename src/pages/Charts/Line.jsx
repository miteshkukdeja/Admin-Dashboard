import React from "react";
import { Header, LineChart } from "../../components";

const Line = () => {
  return (
    <div className="m-4 md:m-10 bg-white mt-24 p-10 dark:bg-secondary-dark-bg">
      <Header category={"Chart"} title={"Inflation Rate"} />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
