import { Button } from "@nextui-org/button";
import { Card, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FaLocationArrow } from "react-icons/fa";
import moment from "moment";

const PostCard = ({ post }: { post: TPost }) => {
  return (
    <Card isFooterBlurred className="w-full h-[300px]" key={post?._id}>
      <CardHeader className="absolute z-10 top-0 flex-col items-start bg-[#00000060] ">
        <h4 className="text-white/90 font-medium text-xl">{post?.title}</h4>
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
          <div className="flex items-center text-white rounded-full w-10 h-10 bg-black">
            <FaLocationArrow size={20} className="mx-auto " />
          </div>

          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{post.location}</p>
            <p className="text-tiny text-white/60">
              {moment(post.dateFound).format("LLL")}
            </p>
          </div>
        </div>
        <Button radius="full" size="sm">
          Get App
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
