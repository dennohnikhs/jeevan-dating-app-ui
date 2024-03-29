import React from "react";

function DashBoardTabButton({
  tabName,
  selectedTab,
  handleTabChange,
  children,
}) {
  return (
    <button
      className={` py-3 text-ja-light-gray font-bold font-lg px-2 flex flex-col items-center ${
        selectedTab === tabName ? "text-ja-red font-aushan text-center" : ""
      }`}
      onClick={() => handleTabChange(tabName)}
    >
      {children}
    </button>
  );
}

export default DashBoardTabButton;
