import React from "react";

const Divider = () => {
  return (
    <div className="my-7 flex items-center gap-3">
      <div className="h-px flex-1 bg-gray-200" />

      <span className="text-xs font-medium text-gray-500">or</span>

      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
};

export default Divider;
