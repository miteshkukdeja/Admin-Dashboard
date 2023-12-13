import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { chatData } from "../data/dummy";
import { Button } from "../components";

const Notification = () => {
  const { setIsClicked, initialState, currentColor } = useStateContext();

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: "false" });
  };
  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 bg-white p-8 rounded-lg w-96 dark:bg-[#42464D]">
      <div className="flex justify-between items-center">
        <p className="dark:text-gray-200 text-lg font-semibold">
          Notifications
        </p>
        <button
          type="button"
          style={{ color: "rgba(153,171,180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          onClick={handleClick}
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="mt-5">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center leading-8 gap-5 border-b-1 border-color p-3"
          >
            <img
              className="rounded-full h-10 w-10"
              src={item.image}
              alt={item.message}
            />
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {" "}
                {item.desc}{" "}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all notifications"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;
