import React from "react";

const Container = ({ children }) => {
  return (
    <div className="bg-slate-200 rounded-[3rem] grid place-content-center p-20 h-[34rem]">
      {children}
    </div>
  );
};

export default Container;
