"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { MenuList } from "./menu";

type MenuItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};
export default function SideBarComponent() {
  const [menuList, setMenuList] = useState<MenuItem[]>(MenuList);
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {menuList.map((menuItem) => (
            <Sidebar.Item as={Link} href={menuItem.path} icon={menuItem.icon}>
              {menuItem.name}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
