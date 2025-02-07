/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const EmptyStateText = ({ text = "No Data Available", marginY=0 }) => {
  return <div className={`text-xs md:text-sm lg:text-base w-11/12 mx-auto text-white font-medium text-center ${marginY}`}>{text}</div>;
};

export default EmptyStateText;
