import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import avatar from "../data/avatar3.png";
import { userProfileData } from "../data/dummy";
import Button from "./Button";
const UserProfile = () => {
  const { setIsClicked, initialState, currentColor } = useStateContext();

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: false });
  };
  return (
    <div className="nav-item absolute right-5 top-16 bg-white p-8 rounded-lg w-96 dark:bg-[#42464D]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <p className="dark:text-gray-200 text-lg font-semibold">User Profile</p>
        <button
          type="button"
          style={{ color: "rgba(153,171,180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          onClick={handleClick}
        >
          <MdOutlineCancel />
        </button>
      </div>

      {/* Content */}
      <div className="flex gap-5 items-center mt-3 p-3 border-color border-b-1">
        <img src={avatar} alt="avatar" className="rounded-full h-24 w-24" />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            Mitesh Kukdeja
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Administration
          </p>
          <p className="text-gray-500 font-semibold text-sm dark:text-gray-400">
            info@mkdesign.com
          </p>
        </div>
      </div>

      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className=" text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-5">
        <Button
          text="Logout"
          bgColor={currentColor}
          borderRadius="10px"
          color="white"
          width="full"
        />
      </div>
    </div>
  );
};

export default UserProfile;
