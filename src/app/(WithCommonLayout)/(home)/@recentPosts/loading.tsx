import React from "react";

import { Button } from "@heroui/button";
import Link from "next/link";

import { IPost } from "@/src/types";
import Container from "@/src/components/ui/Container";
import Card from "@/src/components/ui/Card";
import CardSkeleton from "@/src/components/ui/CardSkeleton";

const RecentPosts = async () => {
  return (
    <Container>
      <div className="section-title my-8">
        <h1 className="text-3xl text-center mb-2"> Recently Found Items </h1>
        <p className="text-center text-xl">
          A list of items that have benn recently found and reported .
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4  gap-10 justify-center my-8">
        {[...Array(12)].map((post: IPost) => (
          <CardSkeleton key={post?._id} />
        ))}
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
