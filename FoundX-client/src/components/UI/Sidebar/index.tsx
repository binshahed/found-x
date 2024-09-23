"use client";

import { useUser } from "@/src/context/user.provider";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import SidebarOptions from "./SidebarOptions";
import { userLinks } from "./conastans";

const Sidebar = () => {
  const { user } = useUser();

  return (
    <div>
      <div className="rounded-xl bg-default-100 p-2">
        <div>
          <Avatar />
        </div>
        <div className="mt-3">
          <h3>{user?.name}</h3>
          <p>{user?.email}</p>
        </div>
        <Button
          as={Link}
          className="mt-2 w-full rounded-md"
          href={"/profile/create-post"}
        >
          Create Post
        </Button>
      </div>
      <div className="mt-3 space-y-2 rounded-xl bg-default-100">
        <SidebarOptions links={userLinks} />
      </div>
    </div>
  );
};

export default Sidebar;
