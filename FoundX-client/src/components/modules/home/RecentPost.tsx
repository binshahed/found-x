import { Button } from "@nextui-org/button";
import Container from "../../UI/Container";
import Link from "next/link";
import { getRecentPost } from "@/src/services/recentPost";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { delay } from "@/src/utils";
import PostCard from "../../UI/PostCard";

const RecentPost = async () => {
  const { data: recentPost } = await getRecentPost();

  // await delay(5000);
  // console.log(recentPost);

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
          {recentPost?.map((post: TPost) => (
            <PostCard post={post} key={post._id} />
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
