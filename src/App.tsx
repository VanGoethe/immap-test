import React, { useState } from "react";
import "./App.css";
import {
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Layout,
  Menu,
  MenuProps,
  Row,
  Select,
  Slider,
} from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";

import { LeftOutlined } from "@ant-design/icons";

const headerStyle: React.CSSProperties = {
  color: "#333",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#fff",
};

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

function App() {
  const [form] = Form.useForm();
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };
  const [current, setCurrent] = useState("all");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <div className="App">
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={{ minHeight: "90vh" }}>
          <Row style={{ padding: "2rem" }}>
            <Col span={6}>
              <Card
                title={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <h3 className="filter-title">FILTERS</h3>{" "}
                    <span className="clear-all">Clear all filters</span>
                    <div className="sidebar-toggler">
                      <div className="bg-icon">
                        <LeftOutlined />
                      </div>
                    </div>
                  </div>
                }
                bordered={false}
                style={{ width: 300 }}
                className="sidebar"
              >
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
                      <Slider
                        defaultValue={100}
                        tooltip={{ formatter: null }}
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
                          {" "}
                          <span>Country</span>{" "}
                          <span className="clear">Clear</span>
                        </div>
                      }
                    >
                      <Select
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder="Please select"
                        defaultValue={["France", "Brazil"]}
                        onChange={handleChange}
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
                      label=<div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        {" "}
                        <span>Organization</span>{" "}
                        <span className="clear">Clear</span>
                      </div>
                    >
                      <Select
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder="Please select an organization"
                        onChange={handleChange}
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
                          {" "}
                          <span>Languages</span>{" "}
                          <span className="clear">Clear</span>
                        </div>
                      }
                    >
                      <Select
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder="Please select"
                        defaultValue={["English", "French"]}
                        onChange={handleChange}
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
                          {" "}
                          <span>Job Type</span>{" "}
                          <span className="clear">Clear</span>
                        </div>
                      }
                    >
                      <div>
                        <Checkbox defaultChecked>
                          Full time (40 hrs/wk)
                        </Checkbox>
                      </div>
                      <div>
                        <Checkbox defaultChecked>
                          Part-time (20 hrs/wk)
                        </Checkbox>
                      </div>
                      <div>
                        <Checkbox defaultChecked>Hourly</Checkbox>
                      </div>
                    </Form.Item>
                  </Form>
                </div>
              </Card>
            </Col>
            <Col span={18}>
              <div className="navbar">
                <Menu
                  defaultActiveFirst
                  selectedKeys={[current]}
                  mode="horizontal"
                  items={items}
                  onClick={onClick}
                />
              </div>
            </Col>
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default App;
