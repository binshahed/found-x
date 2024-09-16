import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <section className="h-[calc(100vh-64px)] bg-[url('/images/home-bg.jpg')] bg-cover bg-center">
      <div className="pt-32 max-w-xl flex-1  mx-auto">
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm"
          }}
          size="lg"
          startContent={<SearchIcon />}
          type="text"
        />
      </div>
    </section>
  );
};

export default Landing;
