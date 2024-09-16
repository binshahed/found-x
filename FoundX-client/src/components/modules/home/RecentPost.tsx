import { Button } from "@nextui-org/button";
import Container from "../../UI/Container";
import Link from "next/link";
import { getRecentPost } from "@/src/services/recentPost";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { delay } from "@/src/utils";

const RecentPost = async () => {
  const { data: recentPost } = await getRecentPost();

  await delay(5000);

  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently Found Items</h2>
        <p>A list of items that have been recently found and reported</p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4">
          {recentPost?.map((post: any) => (
            <Card isFooterBlurred className="w-full h-[300px]" key={post?._id}>
              <CardHeader className="absolute z-10 top-0 flex-col items-start bg-[#00000060] ">
                <h4 className="text-white/90 font-medium text-xl">
                  {post?.title}
                </h4>
                {/* <p className="text-tiny text-white/60 uppercase font-bold">
                  Your day your way
                </p> */}
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={post?.images[0]}
              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="Breathing app icon"
                    className="rounded-full w-10 h-11 bg-black"
                    src="https://nextui.org/images/breathing-app-icon.jpeg"
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-white/60">Breathing App</p>
                    <p className="text-tiny text-white/60">
                      Get a good night's sleep.
                    </p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  Get App
                </Button>
              </CardFooter>
            </Card>
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
