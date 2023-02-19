import React, { useState } from "react";
import "./App.css";
import { Col, Layout, Row } from "antd";
import { Header, Content } from "antd/es/layout/layout";

import { jobs } from "./datas";
import { HeadWithSort, JobCard, Navbar, Sidebar } from "./components";

const headerStyle: React.CSSProperties = {
  color: "#333",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#fff",
};

function App() {
  const [collapsed, setCollapsed] = useState(false);

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
              <Sidebar
                collapsed={collapsed}
                toggleSidebar={(val: boolean) => toggleSidebar(val)}
              />
            </Col>
            <Col
              span={collapsed ? 20 : 18}
              style={{ display: "flex", justifyContent: "flex-start" }}
            >
              <div style={{ width: collapsed ? "100%" : "90%" }}>
                <Navbar />
                <HeadWithSort />
                <div className="jobs">
                  {jobs.map((job) => (
                    <JobCard job={job} />
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
