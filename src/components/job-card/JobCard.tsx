import React from "react";
import { Badge, Button, Card, Col, Divider, Row } from "antd";
import {
  EyeFilled,
  EditFilled,
  DeleteFilled,
  UnorderedListOutlined,
  StarFilled,
  FileDoneOutlined,
  TeamOutlined,
} from "@ant-design/icons";

type Props = {
  job: {
    title: string;
    applicants: number;
    country: string;
    dutyStation: string;
    type: string;
    status: string;
    languages: string[];
    openingDate: string;
    closingDate: string;
    Organization: string;
    creator: {
      name: string;
      email: string;
    };
  };
  style?: any;
};

export const JobCard = ({ job, style }: Props) => {
  return (
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
          <h3 className="job-card-title">{job.title}</h3>
          <div>
            <Button type="primary" icon={<EyeFilled />}>
              View Vacancy
            </Button>
          </div>
        </div>
      }
      bordered={false}
      style={style}
    >
      <p style={{ margin: 0 }} className="number-applicants">
        Number of Applicants: {job.applicants}
      </p>
      <Divider style={{ margin: "10px 0" }} />
      <div className="card-infos">
        <Row gutter={[16, 24]}>
          <Col className="gutter-row" xs={12} sm={12} md={6} lg={4} xl={4}>
            <div className="card-info-label">
              <span>Country</span>
            </div>
            <div className="card-info-value">
              <span>{job.country}</span>
            </div>
          </Col>
          <Col className="gutter-row" xs={12} sm={12} md={6} lg={5} xl={5}>
            <div className="card-info-label">
              <span>Duty Station</span>
            </div>
            <div className="card-info-value">
              <span>{job.dutyStation}</span>
            </div>
          </Col>
          <Col className="gutter-row" xs={12} sm={12} md={12} lg={5}>
            <div className="card-info-label">
              <span>Type</span>
            </div>
            <div className="card-info-value">
              <span>{job.type}</span>
            </div>
          </Col>
          <Col className="gutter-row" xs={12} sm={12} md={12} lg={5}>
            <div className="card-info-label">
              <span>Status</span>
            </div>
            <div className="card-info-value">
              <span>{job.status}</span>
            </div>
          </Col>
          <Col className="gutter-row" xs={12} sm={12} md={12} lg={5}>
            <div className="card-info-label">
              <span>Languages</span>
            </div>
            <div className="card-info-value">
              {job.languages.map((lg, i) => (
                <Badge
                  key={i}
                  count={lg}
                  size="default"
                  style={{
                    background: "#005DB5",
                    color: "#fff",
                    marginRight: "5px",
                  }}
                />
              ))}
            </div>
          </Col>
          <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={4}>
            <div className="card-info-label">
              <span>Opening Date</span>
            </div>
            <div className="card-info-value">
              <span>{job.openingDate}</span>
            </div>
          </Col>
          <Col className="gutter-row" xs={12} sm={12} md={12} lg={5}>
            <div className="card-info-label">
              <span>Closing Date</span>
            </div>
            <div className="card-info-value">
              <span>{job.closingDate}</span>
            </div>
          </Col>
          <Col className="gutter-row" xs={12} sm={12} md={12} lg={5}>
            <div className="card-info-label">
              <span>Organization</span>
            </div>
            <div className="card-info-value">
              <span>{job.Organization}</span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="action-buttons" style={{ marginTop: "1rem" }}>
        <Row gutter={10}>
          <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={4}>
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
          <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={4}>
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
          <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={4}>
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
          <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={4}>
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
          <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={4}>
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
          <Col className="gutter-row" xs={24} sm={24} md={12} lg={12} xl={4}>
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
  );
};
