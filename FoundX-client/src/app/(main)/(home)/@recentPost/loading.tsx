import { Button } from "@nextui-org/button";

import Link from "next/link";
import { getRecentPost } from "@/src/services/recentPost";
import Container from "@/src/components/UI/Container";
import PostCard from "@/src/components/UI/PostCard";
import { delay } from "@/src/utils";
import LoadingCard from "@/src/components/UI/LoadingCard";

const RecentPost = () => {
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          {[...Array(9)]?.map((post: TPost, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Link href="/found-items">
          <Button className="rounded-md bg-default-900 text-default">
            See All
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default RecentPost;
