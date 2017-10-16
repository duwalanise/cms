import React from 'react';
import { Row, Col, Avatar, Input, Button } from 'antd';
import { Field, reduxForm } from 'redux-form';

const InputGroup = Input.Group;

const customInput = ({input, meta: { touched, error } }) => <Input style={{ width: '70%' }} {...input} />;

const StudentFrom = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={ handleSubmit }>
      <Row>
        <Col span={8}>

        </Col>
        <Col span={16}>
          <div>
            <InputGroup compact>
              <Input style={{ width: '30%' }} defaultValue="First Name" readOnly />
              <Field name="firstName" component={customInput} type="text" />
            </InputGroup>
          </div>
          <div>
            <InputGroup compact>
              <Input style={{ width: '30%' }} defaultValue="Last Name" readOnly />
              <Field name="lastName" component={customInput} type="text" />
            </InputGroup>
          </div>
          <div>
            <InputGroup compact>
              <Input style={{ width: '30%' }} defaultValue="Email" readOnly />
              <Field name="email" component={customInput} type="text" />
            </InputGroup>
          </div>
          <Button type="primary" htmlType="submit" >Save</Button>
        </Col>
      </Row>
    </form>
  )
}

export default reduxForm({
  // a unique name for the form
  form: 'student'
})(StudentFrom);
