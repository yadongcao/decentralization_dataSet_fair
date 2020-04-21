import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './CreateNewProblem.css';
import Modal from 'react-modal';
export default class CreateNewProblem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image:null
    }
  }
  saveLogo(){

  }
  removeLogo(){

  }
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({image: e.target.result});
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  render() {

  return (
    <div>
      <form style={{marginLeft:"10vmin",marginTop:"5vh"}}>
      <table >
        <tbody>
          <tr><td>问题域</td><td><TextField placeholder="请输入问题域题目" name="problem"></TextField></td></tr>
          <tr><td>介绍</td><td><TextField placeholder="请介绍问题域基本信息" name="description"></TextField></td></tr>
          <tr><td>是否加密</td><td>
              <label className="switch">
                <input type="checkbox" name="encrypt"/>
                <span className="slider round"></span>
            </label></td></tr>
        <tr><td>Logo</td><td>{
            this.state.image !=null? <div><img src={this.state.image} width="100px" height="100px"/><br/></div>:null
            }<input type="file" id="img" accept="image/*" onChange={this.onImageChange}/><br/>
            </td></tr>
          </tbody>
      </table>
      <br/>
      <br/>
      <input type="submit"></input>
      </form>
    </div>
  );
  }
}
