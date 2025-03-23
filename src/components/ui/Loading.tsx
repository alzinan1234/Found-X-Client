import { Spinner } from "@heroui/spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen backdrop-blur-md z-[999] fixed bg-black/10 inset-0">
      <Spinner
        classNames={{
          label: "text-foreground mt-4 font-bold text-purple-500 text-xl",
        }}
        label="Just a Moment... 🚀  "
        variant="spinner"
        size="lg"
      />
    </div>
  );
};

export default Loading;
