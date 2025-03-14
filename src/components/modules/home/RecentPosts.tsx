import React from "react";
import Container from "../../ui/Container";
import { Button } from "@heroui/button";
import Link from "next/link";
import { getRecentPosts } from "@/src/services/RecentPosts";
import Card from "../../ui/Card";
import { IPost } from "@/src/types";

const RecentPosts = async () => {
  const { data: posts } = await getRecentPosts();
  console.log(posts);

  return (
    <Container>
      <div className="section-title my-8">
        <h1 className="text-3xl text-center mb-2"> Recently Found Items </h1>
        <p className="text-center text-xl">
          A list of items that have benn recently found and reported .
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4  gap-10 justify-center my-8">
        {posts.map((post: IPost) => (
          <Card key={post?._id} post={post} />
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
