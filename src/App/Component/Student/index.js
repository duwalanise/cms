import React, {Component} from 'react';
import { Table, Modal } from 'antd';
import { connect } from 'react-redux';
import StudentForm from './studentForm';
import { bindActionCreators } from 'redux'
import { fetchStudentList } from './action';


const OpenModal = ({ data, visible, handleSubmit, handleCancel }) => (
  <Modal
    title="Basic Modal"
    visible={visible}
    footer={null}
    onCancel={handleCancel}
    width={800}
  >
    <StudentForm onSubmit={handleSubmit} initialValues={data} />
  </Modal>
);

class Student extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
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
        dataIndex: 'street',
        key: 'street',
        width: 200, 
      }, {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        width: 200,  
      },{
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a href="#" onClick={() => {this.showModal(record)}}>Edit</a>
            <span className="ant-divider" />
            <a href="#" onClick={() => console.log('delete')}>Delete</a>
          </span>
        ),
      }
    ];
  }

  componentDidMount() {
    this.props.fetchStudentList();
  }

  showModal(selectedRecord) {
    this.setState({
      visible: true,
      selectedRecord,
    });
  }

  handleSubmit = (value) => {
    console.log(value)
    this.setState({
      visible: false,
    });
  }
  
  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <div>
        <OpenModal 
          data={this.state.selectedRecord}
          visible={this.state.visible}
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleCancel}
        />
        <Table dataSource={this.props.studentList} columns={this.columns} scroll={{ y: 400 }}/>
      </div>
    );
  }
}

export default connect(
  store=>({studentList: store.students.studentList}),
  (dispatch) => bindActionCreators({ fetchStudentList }, dispatch)
)(Student);