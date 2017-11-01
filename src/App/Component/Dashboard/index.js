import React from 'react';
import {Row, Col, Card, Icon} from 'antd';


export default () =>(
  <Row gutter={16}>
    <Col span={8} >
      <Card title="Students" style={{backgroundColor: '#efefef'}}>
        <Icon type="team" /> 500
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title">Card content</Card>
    </Col>
    <Col span={8}>
      <Card title="Card title">Card content</Card>
    </Col>
  </Row>
);