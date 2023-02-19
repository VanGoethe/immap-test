import { Menu, MenuProps } from "antd";
import React, { useState } from "react";

type Props = {};

export const Navbar = (props: Props) => {
  const [current, setCurrent] = useState("all");

  const items: MenuProps["items"] = [
    {
      label: "All jobs",
      key: "all",
    },
    {
      label: "New jobs",
      key: "new",
    },
    {
      label: "My recruitments",
      key: "recruit",
    },
    {
      label: "Archives",
      key: "archive",
    },
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="navbar">
      <Menu
        defaultActiveFirst
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        onClick={onClick}
      />
    </div>
  );
};
