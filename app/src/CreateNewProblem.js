import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./CreateNewProblem.css";
import Modal from "react-modal";
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Pool from "./models/Pool";
import moment from "moment";
import AppLayout from "./layouts/AppLayout";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default class CreateNewProblem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      showModal: false,
      modalMessage: "",
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  componentWillMount() {
    Modal.setAppElement("body");
  }
  async handleOpenModal(event) {
    event.preventDefault();
    let et = event.target;
    var valid = true;
    [et.Pool.value, et.description.value, et.image.value].forEach(function (
      a
    ) {
      console.log(a, typeof a);
      if (a == null || a == "") {
        valid = false;
      }
    });
    console.log(event.target.encrypt.checked);

    if (valid) {
      var state = { showModal: true, modalMessage: "" };
      this.setState(state);

      const attributes = {
        Title: et.Pool.value,
        Description: et.description.value,
        logoUrl: this.state.image,
        createdBy: this.props.user,
        createdAt: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };
      const p = new Pool(attributes);
      await p.save();
      this.setState({ modalMessage: "Create New Pool Success" });
      var _this = this;
      setTimeout(function () {
        _this.setState({ showModal: false, modalMessage: "" });
      }, 2000);
    } else {
      var state = {
        showModal: true,
        modalMessage: "Unable to upload, there is missing field",
      };
      this.setState(state);
    }
  }
  handleCloseModal() {
    this.setState({ showModal: false });
  }
  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({ image: e.target.result });
      };
      console.log("event.target.files[0", event.target.files[0]);
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  render() {
    return (
      <AppLayout>
        <div>
          <form
            style={{ marginLeft: "10vmin" }}
            onSubmit={this.handleOpenModal}
          >
            <table>
              <tbody>
                <tr>
                  <td>问题域</td>
                  <td>
                    <TextField
                      placeholder="请输入问题域题目"
                      name="Pool"
                      style={{ width: "100%" }}
                    ></TextField>
                  </td>
                </tr>
                <tr>
                  <td>介绍</td>
                  <td>
                    <textarea
                      placeholder="请介绍问题域基本信息"
                      name="description"
                      style={{ width: "100%" }}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>是否公开</td>
                  <td>
                    <label className="switch">
                      <input type="checkbox" name="encrypt" />
                      <span className="slider round"></span>
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>Logo</td>
                  <td>
                    <div
                      style={{
                        textAlign: "center",
                        backgroundColor: "#ebf2f5",
                        borderWidth: "5px",
                        borderColor: "#ebf2f5",
                      }}
                    >
                      <br />
                      <FontAwesomeIcon icon={faPlus} color="#868786" />
                      <br />
                      <br />
                      {this.state.image != null ? (
                        <div>
                          <img
                            src={this.state.image}
                            width="100px"
                            height="100px"
                          />
                          <br />
                        </div>
                      ) : (
                        <font color="#494c4d">上传 logo</font>
                      )}
                      <br />
                      <br />
                      <input
                        type="file"
                        id="img"
                        accept="image/*"
                        name="image"
                        onChange={this.onImageChange}
                      />
                      <br />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input type="submit" value="submit" />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <br />
          </form>
          <Modal
            isOpen={this.state.showModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            {this.state.modalMessage == "" ? (
              <ClipLoader size={150} color={"#123abc"} />
            ) : (
              <div>{this.state.modalMessage}</div>
            )}
            <button onClick={this.handleCloseModal}>Close</button>
          </Modal>
        </div>
      </AppLayout>
    );
  }
}
