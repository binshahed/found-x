import ClimePostCard from "@/src/components/UI/Cards/ClimePostCard";
import Container from "@/src/components/UI/Container";
import { getPostById } from "@/src/services/recentPost";
import React from "react";

interface IProps {
  params: { itemsId: string };
}
const page = async ({ params }: IProps) => {
  const data = await getPostById(params.itemsId);

  return (
    <Container>
      <h5 className="text-center mt-10 mb-5 text-3xl">Items Details</h5>
      <div className="flex justify-center w-full">
        <ClimePostCard post={data?.data} />
      </div>
    </Container>
  );
};

export default page;
