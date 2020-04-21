import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Message from './models/Message.js'
import Test from './models/Test.js'
import TextField from '@material-ui/core/TextField';
import { User, getConfig } from 'radiks-gavin-test';
import {connect} from 'react-redux'
import UserGroupRecords from './models/UserGroupRecords.js'

const styles = {
  center:{
    margin:"100px"
  },
  root: {
    width: 300,
    height: 150,
    margin: '10px auto'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  former:{
    width: 500,
    margin: '10px auto'
  }
};

let groupSelectedId = ""

class DataSetList extends Component {

  constructor(props) {
  	super(props);
    this.state = {
      value:"",
      messageList:[],
      isLoading:true,
      verbose:false
    }
  }

  handleSubmit = async (event) => {
    const attributes = {
      from: User.currentUser()._id,
      content: this.state.value,
      userGroupId:groupSelectedId,
      groupName: ""
    }
    const fetchMessages = await UserGroupRecords.fetchList();
      console.log(fetchMessages)
      fetchMessages.forEach((item) => {
          console.log(item)
          if (item.attrs != undefined){
            if (item.attrs.id == groupSelectedId){
                attributes.groupName = item.attrs.name
            }
          }
      })
    console.log(attributes)
    const message = new Message(attributes);
    await message.save()
    this.setState({isLoading:true})
    await this.handleQuery()
    this.setState({isLoading:false})
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleQuery = async () =>{
      console.log("in")
      this.state.messageList = []
      const fetchMessages = await Message.fetchList({});
      console.log(fetchMessages)
      fetchMessages.forEach((item) => {
          console.log(item)
          if (item.attrs != undefined){
            console.log(typeof(item.attrs.content))
            if (typeof(item.attrs.content)=="string"){//明文数据

              this.state.messageList.push({
                  from: item.attrs.from,
                  content: item.attrs.content,
                  userGroupId: item.attrs.userGroupId,
                  groupName: item.attrs.groupName
              })
            }else {//密文数据
              this.state.messageList.push({
                  from: item.attrs.from.cipherText,
                  content: item.attrs.content.cipherText,
                  userGroupId:item.attrs.userGroupId,
                  groupName: item.attrs.groupName
              })
            }
          }

      })
      console.log(this.state.messageList)
      this.setState({isLoading:false})
  }

  render() {
    const { classes } = this.props;

    return (
      <div>

        <div className={classes.center }>
          <form  noValidate autoComplete="off">
            <TextField className={classes.former} id="outlined-basic" label="留言框" variant="outlined"
              value = {this.state.value}
              onChange={this.handleChange}
            />
          </form>
          <Button  variant="contained" color="primary" onClick={this.handleSubmit}>
              提交
          </Button>
        </div>
        {this.state.isLoading?<div></div>:
          <div className={classes.center}>
            {this.state.messageList.map((message,i) =>{
              return(
                <Card key = {i} className={classes.root}>
                  <CardContent>
                    <Typography>
                     用户组： {message.groupName}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                     用户： {message.from}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {message.content}
                    </Typography>
                  </CardContent>
                </Card>)
            })}
          </div>
        }
      </div>
  );
  }
  async componentDidMount() {
    this.handleQuery()
  }
}

function getVal(state){
  console.log(state)
  groupSelectedId = state.groupIdSelectedVal
  console.log(groupSelectedId)
  return{}
}

export default connect(getVal)(withStyles(styles)(DataSetList));
