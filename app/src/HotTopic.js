import React, { Component } from "react";
import { fries } from "./HotTopic_demo_images";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import {
  faDatabase,
  faCloudDownloadAlt,
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./HotTopic.css";
import AppLayout from "./layouts/AppLayout";

const list = [
  { name: "item1", logo: fries },
  { name: "item2", logo: fries },
  { name: "item3", logo: fries },
  { name: "item4", logo: fries },
  { name: "item5", logo: fries },
  { name: "item6", logo: fries },
  { name: "item7", logo: fries },
  { name: "item8", logo: fries },
  { name: "item9", logo: fries },
];
const MenuItem = ({ text, logo, selected }) => {
  return (
    <div className={`menu-item ${selected ? "active" : ""}`}>
      <img src={logo} style={{ width: "100px" }} />
      <br />
      {text}
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map((el) => {
    const { name } = el;
    return (
      <MenuItem text={name} key={name} selected={selected} logo={el.logo} />
    );
  });

const PreArrow = () => {
  return <FontAwesomeIcon icon={faAngleDoubleLeft} />;
};
const NextArrow = () => {
  return <FontAwesomeIcon icon={faAngleDoubleRight} />;
};

const ArrowLeft = PreArrow();
const ArrowRight = NextArrow();

const selected = "item1";
export default class HotTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          problem: "餐饮营养",
          likes: 4,
          size: 2000,
          downloads: 200,
          comments: 200,
          dataset: [{ name: "酥条", logo: fries }],
        },
      ],
      selected: selected,
    };
  }
  render() {
    const { selected } = this.state;
    // Create menu from items

    return (
      <AppLayout>
        <div>
          {this.state.data.map(function (p) {
            return (
              <div>
                <span>
                  <b>{p.problem}</b>
                </span>
                <span className="icon">
                  <FontAwesomeIcon icon={faThumbsUp} />
                </span>
                <span>{p.likes}</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faDatabase} />
                </span>
                <span>{p.size}</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faCloudDownloadAlt} />
                </span>
                <span>{p.downloads}</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faCommentDots} />
                </span>
                <span>{p.comments}</span>
                <br />
                <br />
                <ScrollMenu
                  data={Menu(p.dataset, selected)}
                  arrowLeft={ArrowLeft}
                  arrowRight={ArrowRight}
                  selected={selected}
                />
              </div>
            );
          })}
        </div>
      </AppLayout>
    );
  }
}
