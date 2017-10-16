import React from 'react';
import { Row, Col, Avatar, Input, Button, DatePicker, Select } from 'antd';
import { Field, reduxForm } from 'redux-form';

const InputGroup = Input.Group;
const Option = Select.Option;

const customInput = ({input, width}) => <Input style={{ width: `${width}%` }} {...input} />;

const customDatePicker = ({input, width}) => <DatePicker style={{width: `${width}%`}} {...input} />;

const customSelect =({input, width, options}) =>
<Select {...input} style={{ width: `${width}%` }}>
  {
    options.map(option =>
      <Option value={option.value}>{option.name}</Option>
    )
  }
</Select>;

const GroupInput = ({label, inputName, customInput, ratio, ...restInput}) => (
  <InputGroup compact size="large" style={{margin: "10px"}}>
    <Input style={{ width: `${ratio}%`}} defaultValue={label} readOnly />
    <Field name={inputName} component={customInput} type="text" width={100 - ratio} {...restInput}/>
  </InputGroup>
);

const gradeOptions = [
  {name: 'Nursery', value: 'nursery'},
  {name: 'JKG', value: 'jkg'},
  {name: 'SKG', value: 'skg'},
  {name: 'One', value: '1'},
  {name: 'Two', value: '2'},
  {name: 'Three', value: '3'},
  {name: 'Four', value: '4'},
  {name: 'Five', value: '5'}
];


const StudentFrom = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={ handleSubmit } >
      <Row>
        <Col span={8}>

        </Col>
        <Col span={14}>
          <GroupInput label="First Name" inputName="firstName" customInput={customInput} ratio={30}/>
          <GroupInput label="Last Name" inputName="lastName" customInput={customInput} ratio={30}/>
          <GroupInput label="Father's Name" inputName="fatherName" customInput={customInput} ratio={30}/>
          <GroupInput label="Mother's Name" inputName="motherName" customInput={customInput} ratio={30}/>
          <Row gutter={16}>
            <Col className="gutter-row" span={8}><GroupInput label="Grade" inputName="grade" customInput={customSelect} ratio={50} options={gradeOptions}/></Col>
            <Col className="gutter-row" span={8}><GroupInput label="Roll" inputName="roll" customInput={customInput} ratio={50}/></Col>
            <Col className="gutter-row" span={8}><GroupInput label="Section" inputName="section" customInput={customInput} ratio={50}/></Col>
          </Row>
          <GroupInput label="DOB" inputName="dob" customInput={customDatePicker} ratio={30}/>
          <GroupInput label="Joined Date" inputName="joinedDate" customInput={customDatePicker} ratio={30}/>
          <GroupInput label="Session Year" inputName="sessionYear" customInput={customInput} ratio={30}/>
          <GroupInput label="Address" inputName="address" customInput={customInput} ratio={30}/>
          <GroupInput label="Email" inputName="email" customInput={customInput} ratio={30}/>
          <GroupInput label="Contact No" inputName="contactNo" customInput={customInput} ratio={30}/>
          <Button type="primary" htmlType="submit" >Save</Button>
        </Col>
      </Row>
    </form>
  )
}

export default reduxForm({
  enableReinitialize: true,
  // a unique name for the form
  form: 'studentForm'
})(StudentFrom);
