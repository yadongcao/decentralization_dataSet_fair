import React, { Component } from 'react';
import {fries} from './HotTopic_demo_images';
export default class IdTag extends Component {
  ////signUserOut
  constructor(props) {
    super(props);
    this.SignOut = this.SignOut.bind(this);
  }
  SignOut =function(){
    this.props.userSession.signUserOut();
    window.location.href = "/";
  }
  render() {
    const { userSession } = this.props;
    const user=userSession.loadUserData().username
    return (
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="80" viewBox="0 0 64 24" preserveAspectRatio="none">
        <filter id="dropshadow" x="-2" y="-2" width="200" height="200">
        <feOffset result="offOut" in="SourceAlpha" dx="1" dy="1" />
        <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />
        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
        <path className="path blur"
          d="M52,2
            h-40
            q-10,0 -10,10
            v0
            q0,10 10,10
            h40
            z
          "
          fill="#FFFFFF"
        />
        <path className="path"
          d="M52,2
            h-40
            q-10,0 -10,10
            v0
            q0,10 10,10
            h40
            z
          "
          fill="#FFFFFF"
        />
      </svg>
      <div>
        <span className="tagImageHolder" style={{position:"absolute",top:"35px",right:"240px"}}><img src={fries} className="tagImage" style={{width:"100%",height:"100%"}}/></span>
        <span style={{position:"absolute",top:"40px",right:"100px"}}>{user.split(".")[0]}<br/>
        <a style={{cursor: "pointer",position:"absolute",right:"0px",color:"grey",fontSize:"15px"}} onClick={this.SignOut}>Logout</a></span>
        
      </div>
      </div>
    );
  }
}
