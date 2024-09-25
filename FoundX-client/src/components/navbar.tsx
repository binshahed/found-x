"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenuToggle
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/UI/theme-switch";
import { Logo } from "@/src/components/icons";
import AvatarDropDown from "./UI/AvatarDropDown";
import { useUser } from "../context/user.provider";
// import { useRouter } from "next/router";

export const Navbar = () => {
  const { user, isLoading } = useUser();

  // const router = useRouter();

  const rightItems = <NextLink href="/login">Login</NextLink>;

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      {/* Brand and Left Items */}
      <NavbarContent className="basis-1/5 sm:basis-auto" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Menu Toggle for Mobile */}
      <NavbarMenuToggle
        aria-label="toggle navigation"
        className="md:hidden lg:hidden"
      />

      {/* Desktop Menu Links */}
      <NavbarContent className="hidden lg:flex basis-auto justify-start ml-2">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Side Items */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-auto"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>

        {!user?.role && (
          <NavbarItem className="hidden lg:flex">{rightItems}</NavbarItem>
        )}

        {user?.role && (
          <NavbarItem className="hidden lg:flex">
            <AvatarDropDown />
          </NavbarItem>
        )}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
        <NavbarMenuItem>{rightItems}</NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
