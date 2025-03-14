import Image from "next/image";
import React from "react";

interface Post {
  title: string;
  cetegory: string;
  image: string;
  city: string;
  dateFound: string;
  _id: string;
}

const Card = ({ post }: { post: Post }) => {
  const { title, cetegory, image, city, dateFound, _id } = post || {};

  console.log(post);
  return (
    <>
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image width={500} height={500} src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{cetegory}</p>
            <p>{city}</p>
            <p>{dateFound}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
