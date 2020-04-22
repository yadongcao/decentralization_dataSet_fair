import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './CreateNewProblem.css';
import Modal from 'react-modal';
import ClipLoader from "react-spinners/ClipLoader";
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class UploadDataSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
        csv:null,
        showModal: false,
        validForm:false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }
  handleOpenModal (event) {
    event.preventDefault();
    let et = event.target;
    var valid =true;
    [et.collection.value,et.description.value,et.problem.value,et.csv.value].forEach(function(a){
      console.log(a,typeof a);
      if (a==null || a==""){
        valid =false;
      }
    });    
    var state={showModal:true,validForm:valid};
    this.setState(state);
    if (valid){
      //radiks async await
    }
  }
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  onCsvChange = (event) => {
 
  }

  render() {
  return (
    <div>
      <form style={{marginLeft:"10vmin"}} onSubmit={this.handleOpenModal}>
      <table >
        <tbody>
          <tr><td>数据集</td><td><TextField placeholder="请输入数据集" name="collection" style={{width:"100%"}}></TextField></td></tr>
          <tr><td>介绍</td><td><TextField placeholder="请介绍数据集基本信息" name="description" style={{width:"100%"}}></TextField></td></tr>
          <tr><td>问题域</td><td><select name="problem">
            {this.state.problemOption.each(function(z){
              return <option value={z}>z</option>
            })}
            </select></td></tr>
            <tr><td>Logo</td><td>{
            this.state.csv !=null? <div><img src={this.state.csv} width="100px" height="100px"/><br/></div>:null
            }<input type="file" id="csv" accept=".csv" name="csv" onChange={this.onCsvChange}/><br/>
            </td></tr>
          <tr><td></td><td><input type="submit" value="submit"/></td></tr>
          </tbody>
      </table>
      <br/>
      <br/>
      </form>
      <Modal
      isOpen={this.state.showModal}
      style={customStyles}
      contentLabel="Example Modal">
      <div>I am a modal</div>
      {
        this.state.validForm?<ClipLoader size={150}
        color={"#123abc"}/>:<div>Unable to upload, there is missing field</div>
      }
      <button onClick={this.handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
  }
}
