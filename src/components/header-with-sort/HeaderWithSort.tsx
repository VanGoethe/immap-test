import React from "react";
import { Form, Radio, Select } from "antd";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

type Props = {};

export const HeadWithSort = (props: Props) => {
  return (
    <div className="header-sort">
      <h3 style={{ marginLeft: "1.5rem", fontWeight: "normal" }}>Result (6)</h3>
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
  );
};
