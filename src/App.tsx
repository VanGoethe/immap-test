import React, { useState } from "react";
import "./App.css";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Layout,
  Menu,
  MenuProps,
  Radio,
  Row,
  Select,
  Slider,
} from "antd";
import { Header, Content } from "antd/es/layout/layout";

import {
  LeftOutlined,
  UpOutlined,
  DownOutlined,
  EyeFilled,
  EditFilled,
  DeleteFilled,
  UnorderedListOutlined,
  StarFilled,
  FileDoneOutlined,
  TeamOutlined,
} from "@ant-design/icons";

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

const jobs = [
  {
    title: "Test",
    applicants: 2,
    country: "France",
    dutyStation: "Paris",
    type: "Full-time",
    status: "International consultant",
    languages: ["English", "French"],
    openingDate: "10 Febuary 2023",
    closingDate: "10 March 2023",
    Organization: "IMMAP",
    creator: {
      name: "(Murhula Metre)",
      email: "asyaifa@immap.org",
    },
  },
  {
    title: "Test 2",
    applicants: 6,
    country: "Brazil",
    dutyStation: "Rio de janeiro",
    type: "Full-time",
    status: "International consultant",
    languages: ["English", "Spanish"],
    openingDate: "5 Febuary 2023",
    closingDate: "3 March 2023",
    Organization: "IMMAP",
    creator: {
      name: "(Murhula Metre)",
      email: "asyaifa@immap.org",
    },
  },
  {
    title: "Test 3",
    applicants: 2,
    country: "France",
    dutyStation: "Marseille",
    type: "Part-time",
    status: "International consultant",
    languages: ["English", "French"],
    openingDate: "1 Febuary 2023",
    closingDate: "28 Fevrier 2023",
    Organization: "IMMAP",
    creator: {
      name: "(Murhula Metre)",
      email: "asyaifa@immap.org",
    },
  },
];

function App() {
  const [form] = Form.useForm();
  const [current, setCurrent] = useState("all");
  const [collapsed, setCollapsed] = useState(false);

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const toggleSidebar = (state: boolean) => {
    setCollapsed(!state);
    console.log(`${collapsed}`);
  };

  return (
    <div className="App">
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={{ minHeight: "90vh" }}>
          <Row style={{ padding: "2rem" }} gutter={24}>
            <Col
              span={collapsed ? 2 : 6}
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
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
                    <h3
                      className={
                        collapsed ? "filter-title rotation" : `filter-title`
                      }
                    >
                      FILTERS {collapsed ? "(6)" : ""}
                    </h3>
                    <span className="clear-all">Clear all filters</span>
                    <div
                      className="sidebar-toggler"
                      onClick={() => toggleSidebar(collapsed)}
                      style={{ right: collapsed ? "8px" : "-15px" }}
                    >
                      <div className="bg-icon">
                        <LeftOutlined
                          className={collapsed ? "rotate-180" : ""}
                        />
                      </div>
                    </div>
                  </div>
                }
                bordered={false}
                style={{
                  width: collapsed ? 50 : 300,
                  height: "fit-content",
                  minHeight: "75.5vh",
                }}
                className="sidebar"
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
                              {" "}
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
                  </>
                )}
              </Card>
            </Col>
            <Col
              span={collapsed ? 20 : 18}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <div style={{ width: collapsed ? "100%" : "90%" }}>
                <div className="navbar">
                  <Menu
                    defaultActiveFirst
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                    onClick={onClick}
                  />
                </div>
                <div className="header-sort">
                  <h3 style={{ marginLeft: "1.5rem", fontWeight: "normal" }}>
                    Result (6)
                  </h3>
                  <div className="section-sort">
                    <div className="sort-by">
                      <Form.Item label="Sort by:">
                        <Select
                          allowClear
                          style={{ width: "100%" }}
                          placeholder="Please select"
                          defaultValue={["Name"]}
                          options={[
                            {
                              label: "Name",
                              value: "Name",
                            },
                            {
                              label: "Date",
                              value: "Date",
                            },
                          ]}
                        />
                      </Form.Item>
                    </div>
                    <div className="order-by">
                      <Form.Item label="Order:">
                        <Radio.Group defaultValue="asc" size="small">
                          <Radio.Button value="asc">
                            <UpOutlined /> Asc
                          </Radio.Button>
                          <Radio.Button value="desc">
                            <DownOutlined /> Desc
                          </Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                    </div>
                  </div>
                </div>
                <div className="jobs">
                  {jobs.map((jb) => (
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
                          <h3 className="job-card-title">{jb.title}</h3>
                          <div>
                            <Button type="primary" icon={<EyeFilled />}>
                              View Vacancy
                            </Button>
                          </div>
                        </div>
                      }
                      bordered={false}
                    >
                      <p style={{ margin: 0 }} className="number-applicants">
                        Number of Applicants: {jb.applicants}
                      </p>
                      <Divider style={{ margin: "10px 0" }} />
                      <div className="card-infos">
                        <Row gutter={[16, 24]}>
                          <Col
                            className="gutter-row"
                            xs={12}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={4}
                          >
                            <div className="card-info-label">
                              <span>Country</span>
                            </div>
                            <div className="card-info-value">
                              <span>{jb.country}</span>
                            </div>
                          </Col>
                          <Col
                            className="gutter-row"
                            xs={12}
                            sm={12}
                            md={6}
                            lg={5}
                            xl={5}
                          >
                            <div className="card-info-label">
                              <span>Duty Station</span>
                            </div>
                            <div className="card-info-value">
                              <span>{jb.dutyStation}</span>
                            </div>
                          </Col>
                          <Col
                            className="gutter-row"
                            xs={12}
                            sm={12}
                            md={12}
                            lg={5}
                          >
                            <div className="card-info-label">
                              <span>Type</span>
                            </div>
                            <div className="card-info-value">
                              <span>{jb.type}</span>
                            </div>
                          </Col>
                          <Col
                            className="gutter-row"
                            xs={12}
                            sm={12}
                            md={12}
                            lg={5}
                          >
                            <div className="card-info-label">
                              <span>Status</span>
                            </div>
                            <div className="card-info-value">
                              <span>{jb.status}</span>
                            </div>
                          </Col>
                          <Col
                            className="gutter-row"
                            xs={12}
                            sm={12}
                            md={12}
                            lg={5}
                          >
                            <div className="card-info-label">
                              <span>Languages</span>
                            </div>
                            <div className="card-info-value">
                              {jb.languages.map((lg) => (
                                <Badge style={{ background: "#005DB5" }}>
                                  {lg}
                                </Badge>
                              ))}
                            </div>
                          </Col>
                          <Col
                            className="gutter-row"
                            xs={24}
                            sm={24}
                            md={12}
                            lg={12}
                            xl={4}
                          >
                            <div className="card-info-label">
                              <span>Opening Date</span>
                            </div>
                            <div className="card-info-value">
                              <span>{jb.openingDate}</span>
                            </div>
                          </Col>
                          <Col
                            className="gutter-row"
                            xs={12}
                            sm={12}
                            md={12}
                            lg={5}
                          >
                            <div className="card-info-label">
                              <span>Closing Date</span>
                            </div>
                            <div className="card-info-value">
                              <span>{jb.closingDate}</span>
                            </div>
                          </Col>
                          <Col
                            className="gutter-row"
                            xs={12}
                            sm={12}
                            md={12}
                            lg={5}
                          >
                            <div className="card-info-label">
                              <span>Organization</span>
                            </div>
                            <div className="card-info-value">
                              <span>{jb.Organization}</span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div style={{ marginTop: "1rem" }}>
                        <Row gutter={10}>
                          <Col
                            className="gutter-row"
                            xs={24}
                            sm={24}
                            md={12}
                            lg={12}
                            xl={4}
                          >
                            <Button
                              style={{
                                width: "100%",
                                background: "#0A397D",
                                color: "white",
                              }}
                              icon={<EyeFilled />}
                            >
                              View Applicants
                            </Button>
                          </Col>
                          <Col
                            className="gutter-row"
                            xs={24}
                            sm={24}
                            md={12}
                            lg={12}
                            xl={4}
                          >
                            <Button
                              style={{
                                width: "100%",
                                background: "#6D6E71",
                                color: "white",
                              }}
                              icon={<FileDoneOutlined />}
                            >
                              View Contracts
                            </Button>
                          </Col>
                          <Col
                            className="gutter-row"
                            xs={24}
                            sm={24}
                            md={12}
                            lg={12}
                            xl={4}
                          >
                            <Button
                              style={{
                                width: "100%",
                                background: "#00967F",
                                color: "white",
                              }}
                              icon={<StarFilled />}
                            >
                              Recommandations
                            </Button>
                          </Col>
                          <Col
                            className="gutter-row"
                            xs={24}
                            sm={24}
                            md={12}
                            lg={12}
                            xl={4}
                          >
                            <Button
                              style={{
                                width: "100%",
                                background: "#005DB5",
                                color: "white",
                              }}
                              icon={<UnorderedListOutlined />}
                            >
                              Interview Questions
                            </Button>
                          </Col>
                          <Col
                            className="gutter-row"
                            xs={24}
                            sm={24}
                            md={12}
                            lg={12}
                            xl={4}
                          >
                            <Button
                              style={{
                                width: "100%",
                                background: "#EFBB04",
                                color: "white",
                              }}
                              icon={<EditFilled />}
                            >
                              Edit Job
                            </Button>
                          </Col>
                          <Col
                            className="gutter-row"
                            xs={24}
                            sm={24}
                            md={12}
                            lg={12}
                            xl={4}
                          >
                            <Button
                              style={{
                                width: "100%",
                                background: "#CB0000",
                                color: "white",
                              }}
                              icon={<DeleteFilled />}
                            >
                              Delete
                            </Button>
                          </Col>
                        </Row>
                      </div>
                      <Divider style={{ margin: "15px 0" }} />
                      <div className="card-footer">
                        <TeamOutlined />{" "}
                        <Badge
                          count="asyaifa@immap.org - (Murhula Metre)"
                          size="default"
                          color="#D6D6D6"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
