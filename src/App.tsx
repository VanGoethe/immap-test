import React, { useState } from "react";
import "./App.css";
import { Col, Layout, Row } from "antd";
import { Header, Content } from "antd/es/layout/layout";

import { job, jobs } from "./datas";
import { HeadWithSort, JobCard, Navbar, Sidebar } from "./components";
import { HeaderLayout } from "./components/Header";

const headerStyle: React.CSSProperties = {
  color: "#333",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#fff",
};

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const [activeTab, setActiveTab] = useState("job");

  const toggleSidebar = (state: boolean) => {
    setCollapsed(!state);
    console.log(`${collapsed}`);
  };

  console.log(activeTab);

  return (
    <div className="App">
      <Layout>
        <Header style={headerStyle}>
          <HeaderLayout
            activeTab={activeTab}
            setActiveTab={(val: string) => setActiveTab(val)}
          />
        </Header>
        <Content style={{ minHeight: "90vh" }}>
          {activeTab === "job" ? (
            <Row style={{ padding: "2rem" }} gutter={24}>
              <Col xs={0} sm={0} md={1} lg={3} xl={3}></Col>
              <Col
                xs={24}
                sm={24}
                md={20}
                lg={18}
                xl={18}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <JobCard
                  job={job}
                  style={{ maxWidth: "1100px", width: "100%" }}
                />
              </Col>
              <Col xs={0} sm={0} md={1} lg={3} xl={3}></Col>
            </Row>
          ) : (
            <Row style={{ padding: "2rem" }} gutter={24}>
              <Col
                xs={0}
                sm={0}
                md={0}
                lg={collapsed ? 2 : 6}
                xl={collapsed ? 2 : 6}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Sidebar
                  collapsed={collapsed}
                  toggleSidebar={(val: boolean) => toggleSidebar(val)}
                />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={collapsed ? 20 : 18}
                xl={collapsed ? 20 : 18}
                span={collapsed ? 20 : 18}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <div
                  className="main-content"
                  style={{ width: collapsed ? "100%" : "90%" }}
                >
                  <Navbar />
                  <HeadWithSort />
                  <div className="jobs">
                    {jobs.map((job, i) => (
                      <JobCard key={i} job={job} />
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Content>
      </Layout>
    </div>
  );
}

export default App;
