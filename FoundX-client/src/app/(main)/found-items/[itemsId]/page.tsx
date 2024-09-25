import React from "react";

interface IProps {
  params: { itemsId: string };
}
const page = ({ params }: IProps) => {
  console.log(params.itemsId);

  return (
    <div>
      <h5>Items Details</h5>
    </div>
  );
};

export default page;
