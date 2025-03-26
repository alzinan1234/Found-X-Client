"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";

import { logout } from "@/src/services/AuthService";
import { useUser } from "@/src/context/user.provider";
import { protectRoutes } from "@/src/constant";

const NavbarDropDown = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { user, setIsLoading } = useUser(); // Ensure setIsLoading is correctly used

  const handleLogout = () => {
    logout();
    setIsLoading(true); // Ensure loading state is updated

    if (protectRoutes.some((route) => pathName.match(route))) {
      router.push("/");
    }
  };

  const handleNavigator = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Avatar className="cursor-pointer" src={user?.profilePhoto} />
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

          <DropdownItem
            key="logout"
            className="text-danger"
            color="danger"
            onClick={handleLogout}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropDown;
