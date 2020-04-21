import React, { Component } from 'react';
import Signin from './Signin.js';
import DataSetList from './DataSetList.js'
import CreateNewProblem from './CreateNewProblem.js'
import UserGroupList from './UserGroupList.js'
import {connect} from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
  UserSession,
  AppConfig
} from 'blockstack';

import { configure,User, getConfig} from 'radiks-gavin-test';


const appConfig = new AppConfig(['store_write', 'publish_data'])
const userSession = new UserSession({ appConfig: appConfig })
console.log(userSession)
configure({
  apiServer: 'http://localhost:1260',
  userSession
});


class App extends Component {

  constructor(){
    super()

  }

  handleSignIn(e){
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }
  render() {
    return (
      <div className="site-wrapper">

          { !userSession.isUserSignedIn() ?
            <div className="site-wrapper-inner">
              <Signin userSession={userSession} handleSignIn={ this.handleSignIn } />
            </div>
            :
            <div className="site-wrapper-inner">
              <Tabs>
                <TabList>
                  <Tab>热门</Tab>
                  <Tab>新建问题域</Tab>
                  <Tab>上传数据格式</Tab>
                  <Tab>我的</Tab>
                </TabList>
                <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <CreateNewProblem/>
                </TabPanel>
              </Tabs>
              <DataSetList />
            </div>
          }
        <br/>

      </div>
    );
  }

  async componentDidMount() {
    const { userSession } = getConfig();
    console.log(userSession)
    if (userSession.isSignInPending()) {
      console.log("in 1")
      await userSession.handlePendingSignIn().then((userData) => {
        window.history.replaceState({}, document.title, "/")
        this.setState({ userData: userData})
      });
      const currentUser = await User.createWithCurrentUser();
      console.log("1",currentUser)
    }
    /*
    else if(userSession.isUserSignedIn()){
      console.log("in 2")
      const currentUser = await User.createWithCurrentUser();
      console.log("2",currentUser)
    }
    */
    console.log(this.props)
  }
}


export default connect()(App)
