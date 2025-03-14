import React from "react";

type PageProps = {
  post: {
    title: string;
    cetegory: string;
    image: string;
    city: string;
    dateFound: string;
    _id: string;
  };
};

const page: React.FC<PageProps> = ({ post }) => {
  return (
    <div>
      <h1 className="text-3xl">this is register page </h1>
    </div>
  );
};

export default page;
