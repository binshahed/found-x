"use client";

import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";

import moment from "moment";
import { ClockIcon, LocationIcon } from "../../icons";
import ImageGallery from "../Post/ImageGallery";
import ClamRequestModal from "../../modals/ClamRequestModal";
import Link from "next/link";
import { useUser } from "@/src/context/user.provider";
import AuthModal from "../../modals/AuthModal";

const ClimePostCard = ({ post }: { post: TPost }) => {
  const { user } = useUser();
  console.log(post);

  return (
    <Card className="w-3/5">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src={post?.user?.profilePhoto}
          width={40}
        />
        <div className="flex flex-col">
          {/* <Link href={`/found-items/${post?._id}`}> */}

          <p className="text-md">{post?.user?.name}</p>
          {/* </Link> */}
          <p className="text-small text-default-500">{post?.user?.email}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <h5 className="text-xl">{post?.title}</h5>
        <h5 className="text-xs flex items-center mt-1">
          <ClockIcon className="mr-2" /> {moment(post?.dateFound).format("LLL")}
        </h5>
        <h5 className="text-xs flex items-center mt-1">
          <LocationIcon className="mr-2" /> {post?.location}, {post?.city}.
        </h5>
        <h5 className="text-sm mt-5">{post?.description}</h5>

        <ImageGallery images={post?.images} />
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-around">
        {user?.email !== post?.user?.email && (
          <div>
            {user?.email ? (
              <ClamRequestModal
                buttonText="Claim Request"
                modalTitle="Claim Request"
                post={post}
              />
            ) : (
              <AuthModal postId={post?._id} />
            )}
          </div>
        )}
        <div>
          <Link href="/found-items">Share</Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ClimePostCard;
