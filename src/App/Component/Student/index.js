import React, {Component} from 'react';
import { Table } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchStudentList } from './action';

const columns = [{
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
}
];

class Student extends Component {
  componentDidMount() {
    this.props.fetchStudentList();
  }

  render() {
    return (
      <Table dataSource={this.props.studentList} columns={columns} scroll={{ y: 400 }}/>
    );
  }
}

export default connect(
  store=>({studentList: store.students.studentList}),
  (dispatch) => bindActionCreators({ fetchStudentList }, dispatch)
)(Student);