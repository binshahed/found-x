"use client";

import { logout } from "@/src/services/authService";
import {
  Dropdown,
  DropdownTrigger,
  DropdownItem,
  DropdownMenu
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import Link from "next/link";

const AvatarDropDown = () => {
  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: true,
            src: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
          }}
          className="transition-transform"
          description="@tonyreichert"
          name="Tony Reichert"
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <Link href="/profile" className="block">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@tonyreichert</p>
          </Link>
        </DropdownItem>

        <DropdownItem key="crate_post">
          <Link href="/profile/create-post" className="block">
            Create Post
          </Link>
        </DropdownItem>
        <DropdownItem key="claim_request">
          <Link href="/profile/claim-request" className="block">
            Claim Request
          </Link>
        </DropdownItem>
        <DropdownItem key="about">
          <Link href="/profile/about" className="block">
            About
          </Link>
        </DropdownItem>

        <DropdownItem key="logout" color="danger" onClick={() => logout()}>
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AvatarDropDown;
