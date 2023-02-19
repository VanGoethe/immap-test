import React from "react";
import { Card, Checkbox, Form, Input, Select, Slider } from "antd";
import { LeftOutlined } from "@ant-design/icons";

type Props = {
  collapsed: boolean;
  toggleSidebar: any;
};

export const Sidebar = ({ collapsed, toggleSidebar }: Props) => {
  const [form] = Form.useForm();
  return (
    <Card
      title={
        <CardHeader
          collapsed={collapsed}
          toggleSidebar={(val: boolean) => toggleSidebar(val)}
        />
      }
      bordered={false}
      style={{
        height: "fit-content",
        minHeight: "75.5vh",
      }}
      className={
        collapsed ? "sidebar sidebar-collapsed" : "sidebar sidebar-full"
      }
    >
      {collapsed ? null : (
        <>
          {" "}
          <div style={{ marginBottom: "2rem" }}>
            <Input className="search-input" placeholder="search" />
          </div>
          <div>
            <Form
              layout="vertical"
              form={form}
              // style={{ maxWidth: 600 }}
            >
              <Form.Item label="Contract length(Month)">
                <Slider defaultValue={100} tooltip={{ formatter: null }} />
              </Form.Item>

              <Form.Item
                label={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <span>Country</span> <span className="clear">Clear</span>
                  </div>
                }
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  defaultValue={["France", "Brazil"]}
                  options={[
                    {
                      label: "Brazil",
                      value: "Brazil",
                    },
                    {
                      label: "Ethiopia",
                      value: "Ethiopia",
                    },
                    {
                      label: "France",
                      value: "France",
                    },
                    {
                      label: "Romania",
                      value: "Romania",
                    },
                    {
                      label: "Syria",
                      value: "Syria",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <span>Organization</span>{" "}
                    <span className="clear">Clear</span>
                  </div>
                }
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select an organization"
                  options={[
                    {
                      label: "Immap",
                      value: "Immap",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <span>Languages</span> <span className="clear">Clear</span>
                  </div>
                }
              >
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  defaultValue={["English", "French"]}
                  options={[
                    {
                      label: "Arabic",
                      value: "Arabic",
                    },
                    {
                      label: "English",
                      value: "English",
                    },
                    {
                      label: "French",
                      value: "French",
                    },
                    {
                      label: "Spanish",
                      value: "Spanish",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <span>Job Type</span> <span className="clear">Clear</span>
                  </div>
                }
              >
                <div>
                  <Checkbox defaultChecked>Full time (40 hrs/wk)</Checkbox>
                </div>
                <div>
                  <Checkbox defaultChecked>Part-time (20 hrs/wk)</Checkbox>
                </div>
                <div>
                  <Checkbox defaultChecked>Hourly</Checkbox>
                </div>
              </Form.Item>
            </Form>
          </div>
        </>
      )}
    </Card>
  );
};

type CardHeaderProps = {
  collapsed: boolean;
  toggleSidebar: any;
};

const CardHeader = ({ collapsed, toggleSidebar }: CardHeaderProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {" "}
      <h3 className={collapsed ? "filter-title rotation" : `filter-title`}>
        FILTERS {collapsed ? "(6)" : ""}
      </h3>
      <span
        style={collapsed ? { display: "none" } : { display: "block" }}
        className="clear-all"
      >
        Clear all filters
      </span>
      <div
        className="sidebar-toggler"
        onClick={() => toggleSidebar(collapsed)}
        style={{ right: collapsed ? "8px" : "-15px" }}
      >
        <div className="bg-icon">
          <LeftOutlined className={collapsed ? "rotate-180" : ""} />
        </div>
      </div>
    </div>
  );
};
