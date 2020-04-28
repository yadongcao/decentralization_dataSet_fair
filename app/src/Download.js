import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Modal from 'react-modal';
import Media from './models/Media';
import ClipLoader from "react-spinners/ClipLoader";
import Base64Downloader from 'react-base64-downloader';
const queryString = require('query-string');


export default class Download extends Component {
  constructor(props){
    super(props)
    console.log(window.location.search)
    const parsed = queryString.parse(window.location.search);
    this.fileUrl = parsed.fileUrl;
    this.state = {
      modalMessage:null,
      showModal:false,
      fileData:null
    };
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }
  componentWillMount() {
    Modal.setAppElement('body');
  }
  async handleOpenModal(){
    this.setState({showModal:true,modalMessage:""})
    const file = await Media.findById(this.fileUrl,{})
    const data = file.attrs.Data;
    this.setState(
      {
        modalMessage: "Your Download is ready",
        fileData:data
      }
    );
  }
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  render() {
    
    return (
      <div className="panel-landing" id="section-1" style={{margin:200}}>
        Confirm download file?
        <br/>
        <Button onClick={this.handleOpenModal}>Yes</Button>
        <Modal
      isOpen={this.state.showModal}
      contentLabel="Example Modal">
      {
        this.state.modalMessage==""?<ClipLoader size={150}
        color={"#123abc"}/>:<div>{this.state.modalMessage}</div>
      }
      {
        this.state.fileData!=null?<Base64Downloader base64={this.state.fileData}>Click to download</Base64Downloader>:null
      }
      <br/>
      <button onClick={this.handleCloseModal}>Close</button>
      </Modal>
      </div>
    );
  }
}
