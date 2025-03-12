import React from "react";
import Container from "../../ui/Container";
import { Button } from "@heroui/button";
import Link from "next/link";

const RecentPosts = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/items?sortBy=createdAt&limit=12"
  );

  console.log("data", await res.json());
  return (
    <Container>
      <div className="section-title my-8">
        <h1 className="text-3xl text-center mb-2"> Recently Found Items </h1>
        <p className="text-center text-xl">
          A list of items that have benn recently found and reported .
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4  gap-10 justify-center my-8">
        <h2 className="text-3xl"> Recent Posts</h2>
      </div>

      <div className="flex justify-center">
        <Button className="bg-default-800 text-default rounded-md" size="lg">
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPosts;
