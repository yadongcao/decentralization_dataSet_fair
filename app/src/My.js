import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MyTable from './MyTable.js'
import makeData from './makeData'
export default class My extends Component {

  render() {
    const columns1 = [
      {
        Header: '规则偏好',
        accessor: '规则偏好', // accessor is the "key" in the data
      },
      {
        Header: '描述',
        accessor: '描述',
      },{
        Header: '下载次数',
        accessor: '下载次数',
      },{
        Header: '状态',
        accessor: '状态',
      },{
        Header: '更新时间',
        accessor: '更新时间',
      },{
        Header: '操作',
        accessor: '操作',
      }
    ];
    const columns2 = [
      {
        Header: '数据集名字',
        accessor: '规则偏好', // accessor is the "key" in the data
      },
      {
        Header: '描述',
        accessor: '描述',
      },{
        Header: '下载次数',
        accessor: '下载次数',
      },{
        Header: '状态',
        accessor: '状态',
      },{
        Header: '更新时间',
        accessor: '更新时间',
      },{
        Header: '操作',
        accessor: '操作',
      }
    ];
    const newPerson = () => {
      const statusChance = Math.random()
      return {
        "规则偏好": "Trade Code 0",
        '描述': "这是个描述",
        "下载次数":200,
        "状态":"申请",
        "更新时间":"",
        "操作":""
      }
    }
    const data1 = makeData(newPerson,100);
    return (
      <div className="panel-landing" id="section-1">
        <Tabs>
          <TabList style={{width:250}}>
            <Tab>问题域管理</Tab>
            <Tab>数据集管理</Tab>
          </TabList>
          <TabPanel>
            <MyTable columns={columns1} data={data1}/>
          </TabPanel>
          <TabPanel>
            <MyTable columns={columns2} data={data1}/>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
