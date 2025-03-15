"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Avatar,
} from "@heroui/react";

import { useRouter } from "next/navigation";

const NavbarDropDown = () => {
  const router = useRouter();
  const handleNavigator = (pathname: string) => {
    router.push(pathname);
  };
  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar className=" cursor-pointer" name="Al Zinan" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem onClick={() => handleNavigator("/profile")}>
            Profile
          </DropdownItem>

          <DropdownItem onClick={() => handleNavigator("/profile/create-post")}>
            Create-Post
          </DropdownItem>

          <DropdownItem onClick={() => handleNavigator("/profile/setting")}>
            Setting
          </DropdownItem>

          <DropdownItem key="delete" className="text-danger" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropDown;
