import React, {Component} from 'react';
import { Table, Modal, Button } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import StudentForm from './studentForm';
import { bindActionCreators } from 'redux';
import { fetchStudentList, updateStudent, addStudent, removeStudent } from './action';


const getDate = (data, dateRef) => (data && data[dateRef] ? moment(data[dateRef], "YYYY-MM-DD") : null)

const OpenModal = ({ title, data, visible, handleSubmit, handleCancel }) => (
  <Modal
    title={title}
    visible={visible}
    footer={null}
    onCancel={handleCancel}
    width={800}
  >
    <StudentForm
      onSubmit={handleSubmit}
      initialValues={{...data, dob: getDate(data, 'dob'), joinedDate: getDate(data, 'joinedDate')}} />
  </Modal>
);

class Student extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      isUpdate: false,
      selectedRecord: null,
    };
    this.columns = [
      {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
        width: 200,
      }, {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
        width: 200,  
      }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        width: 200, 
      }, {
        title: 'email',
        dataIndex: 'email',
        key: 'eamail',
        width: 200,  
      },{
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="#" onClick={() => {this.showModal(record, true)}}>Edit</a>
            <span className="ant-divider" />
            <a href="#" onClick={() => this.props.removeStudent(record)}>Delete</a>
          </span>
        ),
      }
    ];
  }

  componentDidMount() {
    this.props.fetchStudentList();
  }

  showModal(selectedRecord, isUpdate) {
    this.setState({
      visible: true,
      isUpdate,
      selectedRecord,
    });
  }

  handleSubmit = (value) => {
    if(this.state.isUpdate) {
      this.props.updateStudent(value);
    } else {
      this.props.addStudent(value);
    }
    this.setState({
      visible: false,
      isUpdate: false,
    });
  }
  
  handleCancel = (e) => {
    this.setState({
      visible: false,
      isUpdate: false,
    });
  }

  render() {
    return (
      <div>
        <OpenModal
          title={this.state.isUpdate ? 'Update Student' : 'Add Student' }
          data={this.state.selectedRecord}
          visible={this.state.visible}
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleCancel}
        />
        <Button type="primary" onClick={() => this.showModal(null)} >Add Student</Button>
        <Table dataSource={this.props.studentList} columns={this.columns} scroll={{ y: 400 }} rowKey={record => record.id} />
      </div>
    );
  }
}

export default connect(
  store=>({studentList: store.students.studentList}),
  (dispatch) => bindActionCreators({ fetchStudentList, addStudent, updateStudent, removeStudent }, dispatch)
)(Student);