import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import moment from "moment";
import { ClockIcon, LocationIcon } from "../../icons";
import ImageGallery from "../Post/ImageGallery";
import ClamRequestModal from "../../modals/ClamRequestModal";

const ClimePostCard = ({ post }: { post: TPost }) => {
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
          <p className="text-md">{post?.user?.name}</p>
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
        <div>
          <ClamRequestModal
            buttonText="Claim Request"
            modalTitle="Claim Request"
            post={post}
          />
          {/* <Link href="/found-items/post/[id]">Claim Request</Link> */}
        </div>
        <div>
          <Link href="/found-items/post/[id]">Share</Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ClimePostCard;
