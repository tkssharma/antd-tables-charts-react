import React from 'react'
import {Row, Col, Table, Alert, Icon} from 'antd';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Spin} from 'antd';
import {message, notification} from 'antd';


const columns = [
  {
  title: 'businessId',
  dataIndex: 'businessId',
  width: 50
 },
 {
  title: 'startDate',
  dataIndex: 'startDate',
  width: 150
 },
 {
  title: 'expiryDate',
  dataIndex: 'expiryDate',
  width: 150
 }, {
  title: 'amount',
  dataIndex: 'amount',
  width: 150
 },
 {
  title: 'term',
  dataIndex: 'term'
 },
 {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Business 一 {record.businessId}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <Link to="/admin/guest/58207d2c5500752a001ba301" className="ant-dropdown-link">
        View <Icon type="down" />
      </Link>
    </span>
  ),
}
];

const tableData = [{"businessId":"LQ-10001","startDate":"11/07/2017","expiryDate":"11/08/2017","amount":"10000","term":"12 months"},
{"businessId":"LQ-10002","startDate":"11/07/2017","expiryDate":"11/08/2017","amount":"20000","term":"12 months"},
{"businessId":"LQ-10003","startDate":"11/07/2017","expiryDate":"11/08/2017","amount":"30000","term":"10 months"},
{"businessId":"LQ-10004","startDate":"11/07/2017","expiryDate":"11/08/2017","amount":"30000","term":"10 months"},
{"businessId":"LQ-10005","startDate":"11/07/2017","expiryDate":"11/08/2017","amount":"30000","term":"10 months"},
{"businessId":"LQ-10006","startDate":"11/07/2017","expiryDate":"11/08/2017","amount":"30000","term":"10 months"},
{"businessId":"LQ-10007","startDate":"11/07/2017","expiryDate":"11/08/2017","amount":"30000","term":"10 months"},
{"businessId":"LQ-10008","startDate":"11/07/2017","expiryDate":"11/08/2017","amount":"30000","term":"10 months"},
{"businessId":"LQ-10009","startDate":"11/07/2017","expiryDate":"11/08/2017","amount":"30000","term":"10 months"},
{"businessId":"LQ-10010","startDate":"11/07/2017","expiryDate":"11/08/2017","amount":"30000","term":"10 months"},
{"businessId":"LQ-10011","startDate":"11/07/2017","expiryDate":"11/08/2017","amount":"30000","term":"10 months"}
];
const title = () => 'Here is header';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = { y: 240 };

export default class TableComponent extends React.Component {
 constructor() {
  super();
  this.state = {
   tableData: [],
   bordered: true,
    loading: false,
    pagination: true,
    size: 'default',
    title,
    showHeader,
    footer,
    rowSelection: {},
  }
 }

 componentWillMount() {
  this.setState( { tableData : tableData });
  //this.setState({loading : false});
 }

 render() {


  let tableData = (<Table {...this.state}
   columns={columns}
   dataSource={this.state.tableData}
   pagination={{
   pageSize: 5
  }}
   scroll={{
   y: 240
  }}/>);
  return (
   <div>
    <Alert message="business data" description="dummy data" type="info" showIcon/>
     {this.state.tableData
      ? tableData
      : ''}

   </div>
  )
 }
}
