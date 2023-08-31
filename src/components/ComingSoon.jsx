import { useState, React } from "react";

const ComingSoon = () => {
  return (
    <div className="coming__soon fixed h-screen w-screen flex items-center justify-center">
      <div className="coming__soon-main border-4 border-black border-solid bg-white rounded-md h-40 w-60 flex flex-col justify-between p-4">
        <p className="font-semibold text-xl">Coming Soon</p>
        <button
          className="bg-black text-white w-12 text-base h-8 rounded-md self-end cursor-pointer"
          onClick={() => hideIt()}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
