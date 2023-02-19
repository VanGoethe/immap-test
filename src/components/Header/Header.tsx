import { MenuProps, Menu } from "antd";
import React, { useState } from "react";

type Props = {
  setActiveTab: any;
  activeTab: string;
};

export const HeaderLayout = ({ setActiveTab, activeTab }: Props) => {
  const [current, setCurrent] = useState(activeTab);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    setActiveTab(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: "Reusable Job Card Component",
      key: "job",
    },
    {
      label: "Job Listing Page",
      key: "jobs",
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ justifyContent: "center" }}
    />
  );
};
