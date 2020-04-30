import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AppLayout from "./layouts/AppLayout";
import MyTable from "./MyTable.js";
import Pool from "./models/Pool.js";
import DataSet from "./models/Dataset";
export default class My extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [[], []],
    };
  }
  async componentDidMount() {
    var datas = [];
    await Promise.all([Pool.fetchList(), DataSet.fetchList()]).then(
      function (values) {
        values.forEach(function (value, i) {
          console.log("value", value);
          var data = [];
          value.forEach(function (v) {
            data.push({
              logo: i == 0 ? v.attrs.logoUrl : v.attrs.fileUrl,
              规则偏好: v.attrs.Title,
              描述: v.attrs.Description,
              下载次数: 200,
              状态: "申请",
              更新时间: v.attrs.createdAt,
              操作: "",
            });
          });
          datas.push(data);
        });
      }
    );
    this.setState({ datas: datas });
  }
  render() {
    const columns1 = [
      {
        Header: "图",
        accessor: "logo", // accessor is the "key" in the data
      },
      {
        Header: "规则偏好",
        accessor: "规则偏好", // accessor is the "key" in the data
      },
      {
        Header: "描述",
        accessor: "描述",
      },
      {
        Header: "下载次数",
        accessor: "下载次数",
      },
      {
        Header: "状态",
        accessor: "状态",
      },
      {
        Header: "更新时间",
        accessor: "更新时间",
      },
      {
        Header: "操作",
        accessor: "操作",
      },
    ];
    const columns2 = [
      {
        Header: "文件",
        accessor: "logo", // accessor is the "key" in the data
      },
      {
        Header: "数据集名字",
        accessor: "规则偏好",
      },
      {
        Header: "描述",
        accessor: "描述",
      },
      {
        Header: "下载次数",
        accessor: "下载次数",
      },
      {
        Header: "状态",
        accessor: "状态",
      },
      {
        Header: "更新时间",
        accessor: "更新时间",
      },
      {
        Header: "操作",
        accessor: "操作",
      },
    ];
    const newPerson = () => {
      const statusChance = Math.random();
      return {
        规则偏好: "Trade Code 0",
        描述: "这是个描述",
        下载次数: 200,
        状态: "申请",
        更新时间: "",
        操作: "",
      };
    };
    return (
      <AppLayout>
        <div className="panel-landing" id="section-1">
          <Tabs>
            <TabList style={{ width: 250 }}>
              <Tab>问题域管理</Tab>
              <Tab>数据集管理</Tab>
            </TabList>
            <TabPanel>
              <MyTable columns={columns1} data={this.state.datas[0]} />
            </TabPanel>
            <TabPanel>
              <MyTable
                columns={columns2}
                data={this.state.datas[1]}
                typez={"dataset"}
              />
            </TabPanel>
          </Tabs>
        </div>
      </AppLayout>
    );
  }
}
