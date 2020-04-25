import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './CreateNewProblem.css';
import Modal from 'react-modal';
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFolder} from '@fortawesome/free-regular-svg-icons';
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
        file:false,
        showModal: false,
        modalMessage:"",
        problemOptions:[]
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
    [et.collection.value,et.description.value,et.problem.value,et.file.value].forEach(function(a){
      console.log(a,typeof a);
      if (a==null || a==""){
        valid =false;
      }
    });    
    
    if (valid){
      var state={showModal:true,modalMessage:""};
      this.setState(state);
      //radiks async await
      /*
      et.collection.value=>数据集
      et.description.value=>介绍
      et.problem.value=>问题域
      et.file.value=>File
      
      then
      this.setState({modalMessage:"Create New Problem Success"})
      setTimeout(function(){
        this.setState({showModal:false,modalMessage:""})
      },2000)
      */
    }else{
      var state={showModal:true,modalMessage:"Unable to upload, there is missing field"};
      this.setState(state);
    }
  }
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  onFileChange = (event) => {
    console.log(event.target.value,typeof event.target.value,event.target.value=="")
    if (event.target.value==""){
      this.setState({file:false})
    }else{
      this.setState({file:true})
    }
    
  }

  render() {
  return (
    <div>
      <form style={{marginLeft:"10vmin"}} onSubmit={this.handleOpenModal}>
      <table >
        <tbody>
          <tr><td>数据集</td><td><TextField placeholder="请输入数据集" name="collection" style={{width:"100%"}}></TextField></td></tr>
          <tr><td>介绍</td><td><textarea placeholder="请介绍数据集基本信息" name="description" style={{width:"100%"}}></textarea></td></tr>
          <tr><td>问题域</td><td><select name="problem">
            {this.state.problemOptions.forEach(function(z){
              return <option value={z}>z</option>
            })}
            </select></td></tr>
            <tr><td>File</td><td>
              <div style={{textAlign:"center",backgroundColor:"#ebf2f5",borderWidth:"5px",borderColor:"#ebf2f5"}}>
                <br/><FontAwesomeIcon icon={faFolder} color="#16b7f2" />
              <br/><br/>
              {
              this.state.file? null:<font color="#494c4d">支持扩展名： .rar .zip .doc .docx .pdf .jpg ...</font>
              }
              <br/><br/>
              <input type="file" id="file" name="file" onChange={this.onFileChange}/><br/>
              </div>
            
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
        this.state.modalMessage==""?<ClipLoader size={150}
        color={"#123abc"}/>:<div>this.state.modalMessage</div>
      }
      <button onClick={this.handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
  }
}
