import ClimePostCard from "@/src/components/UI/Cards/ClimePostCard";
import Container from "@/src/components/UI/Container";
import { getAllPost } from "@/src/services/recentPost";

const FoundItems = async () => {
  const { data } = await getAllPost();

  return (
    <Container>
      <h3>Found Items</h3>

      <div className="flex flex-col gap-4 mx-auto justify-center items-center mt-10">
        {data?.map((post: TPost) => (
          <ClimePostCard key={post?._id} post={post} />
        ))}
      </div>
    </Container>
  );
};

export default FoundItems;
