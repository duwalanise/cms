import React, {Component} from 'react';
import { Table, Modal, Button } from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import StaffForm from './staffForm';
import { bindActionCreators } from 'redux';
import { fetchStaffList, updateStaff, addStaff, removeStaff } from './action';


const getDate = (data, dateRef) => (data && data[dateRef] ? moment(data[dateRef], "YYYY-MM-DD") : null)

const OpenModal = ({ title, data, visible, handleSubmit, handleCancel }) => (
  <Modal
    title={title}
    visible={visible}
    footer={null}
    onCancel={handleCancel}
    width={800}
  >
    { visible ?
      <StaffForm
        onSubmit={handleSubmit}
        initialValues={{...data, dob: getDate(data, 'dob'), joinedDate: getDate(data, 'joinedDate')}} />
        : null 
    }
  </Modal>
);

class Staff extends Component {
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
            <a href="#" onClick={() => this.props.removeStaff(record)}>Delete</a>
          </span>
        ),
      }
    ];
  }

  componentDidMount() {
    this.props.fetchStaffList();
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
      this.props.updateStaff(value);
    } else {
      this.props.addStaff(value);
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
          title={this.state.isUpdate ? 'Update Staff' : 'Add Staff' }
          data={this.state.selectedRecord}
          visible={this.state.visible}
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleCancel}
        />
        <Button type="primary" onClick={() => this.showModal(null)} >Add Staff</Button>
        <Table dataSource={this.props.staffList} columns={this.columns} scroll={{ y: 400 }} rowKey={record => record.id} />
      </div>
    );
  }
}

export default connect(
  store=>({staffList: store.staffs.staffList}),
  (dispatch) => bindActionCreators({ fetchStaffList, addStaff, updateStaff, removeStaff }, dispatch)
)(Staff);