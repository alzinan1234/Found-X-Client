import { Spinner } from "@heroui/spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen backdrop-blur-md z-[999] fixed bg-black/10 inset-0">
      <Spinner size="lg" color="success" labelColor="success" />
    </div>
  );
};

export default Loading;
