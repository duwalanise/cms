import React, {Component} from 'react';
import { Row, Col, Avatar, Input, Button, DatePicker, Select } from 'antd';
import { Field, reduxForm, change } from 'redux-form';

const InputGroup = Input.Group;
const Option = Select.Option;

const customInput = ({input, width, type}) => <Input style={{ width: `${width}%` }} type={type || "text"} {...input} />;

const customDatePicker = ({input, width}) => <DatePicker style={{width: `${width}%`}} {...input} />;

const customSelect =({input, width, options}) =>
<Select {...input} style={{ width: `${width}%` }}>
  {
    options.map(option =>
      <Option value={option.value} key={option.value}>{option.name}</Option>
    )
  }
</Select>;

const GroupInput = ({label, inputName, customInput, ratio, ...restInput}) => (
  <InputGroup compact size="large" style={{margin: "10px"}}>
    <Input style={{ width: `${ratio}%`}} defaultValue={label} readOnly />
    <Field name={inputName} component={customInput} width={100 - ratio} {...restInput}/>
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


class StudentFrom extends Component {
  constructor(props){
    super(props);
    this.state = {
      imagePreviewUrl: this.props.initialValues.avatar,
      file: ''
    }
  }

  handleImageChange = (evt) => {
    evt.preventDefault();
    const reader = new FileReader();
    const file = evt.target.files[0];
    const fileTypeValid = ['image/jpeg','image/jpg','image/png'].indexOf(file.type);
    if (fileTypeValid === -1) {
      alert("Not supported");
      return false;
    }
    const fileSizeInMb = (file.size / 1024) / 1024;
    if (fileSizeInMb > 2) {
      alert('Huge image');
      return false;
    }
    reader.onloadend = () => {
      this.props.dispatch(change('studentForm', 'avatar', reader.result));
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  render(){
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit } >
        <Row>
          <Col span={8}>
            <div className="profile-wrapper">
              <Row>
                <img className="profile-image" src={this.state.imagePreviewUrl || 'default'} />
                <input
                  type="file"
                  name="avatar_input"
                  id="avatar_input"
                  className="avatar-input"
                  accept=".jpg,.jpeg,.png"
                  onChange={this.handleImageChange}
                />
                <label htmlFor="avatar_input" className="avatar-label">Edit</label>
              </Row>
            </div>
            <Field name="avatar"
              component={({input}) =>
                <Input type="hidden" {...input} />
              }
            />
          </Col>
          <Col span={14}>
            <GroupInput label="First Name" inputName="firstName" customInput={customInput} ratio={30}/>
            <GroupInput label="Last Name" inputName="lastName" customInput={customInput} ratio={30}/>
            <GroupInput label="Father's Name" inputName="fatherName" customInput={customInput} ratio={30}/>
            <GroupInput label="Mother's Name" inputName="motherName" customInput={customInput} ratio={30}/>
            <Row gutter={16}>
              <Col className="gutter-row" span={8}><GroupInput label="Grade" inputName="grade" customInput={customSelect} ratio={50} options={gradeOptions}/></Col>
              <Col className="gutter-row" span={8}><GroupInput label="Roll" type="number" inputName="roll" customInput={customInput} ratio={50}/></Col>
              <Col className="gutter-row" span={8}><GroupInput label="Section" inputName="section" customInput={customInput} ratio={50}/></Col>
            </Row>
            <GroupInput label="DOB" inputName="dob" customInput={customDatePicker} ratio={30}/>
            <GroupInput label="Joined Date" inputName="joinedDate" customInput={customDatePicker} ratio={30}/>
            <GroupInput label="Session Year" inputName="sessionYear" customInput={customInput} ratio={30}/>
            <GroupInput label="Address" inputName="address" customInput={customInput} ratio={30}/>
            <GroupInput label="Email" type="email" inputName="email" customInput={customInput} ratio={30}/>
            <GroupInput label="Contact No" inputName="contactNo" customInput={customInput} ratio={30}/>
            <Button type="primary" htmlType="submit" >Save</Button>
          </Col>
        </Row>
      </form>
    );
  }
}

export default reduxForm({
  enableReinitialize: true,
  destroyOnUnmount: true,
  // a unique name for the form
  form: 'studentForm'
})(StudentFrom);
