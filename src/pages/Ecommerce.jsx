import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components";
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-white-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3">
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold">Earnings</p>
              <p className="font-bold text-2xl">$784,574,565</p>
            </div>
          </div>

          <div className="mt-6">
            <Button
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>

        {/* Cards */}
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Updates */}
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 m-3 rounded-xl md:w-780">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center text-gray-600 gap-2 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expenses</span>
              </p>
              <p className="flex items-center text-green-400 gap-2 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>

          {/* Left Side Container of Revenue */}
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$99,765</span>
                  <span className="p-1.5 cursor-pointer hover:drop-shadow-xl rounded-full bg-green-400 text-white ml-3 text-xs">
                    29%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>

              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$39,961</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              {/* Line Chart */}
              <div className="mt-5 ">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkline"
                  type="Line"
                  height="80"
                  width="250"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className="mt-10">
                <Button
                  bgColor={"blue"}
                  color={"white"}
                  text={"Download Report"}
                  borderRadius="10px"
                />
              </div>
            </div>

            {/* Right Side Container of Revenue */}
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
