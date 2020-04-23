import React, { Component } from 'react';
import {fries} from './HotTopic_demo_images';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import "./HotTopic.css";
const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
];
const MenuItem = ({text, selected}) => {
  return <div
    className={`menu-item ${selected ? 'active' : ''}`}
    >{text}</div>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
 
    return <MenuItem text={name} key={name} selected={selected} />;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = 'item1';
export default class HotTopic extends Component {
  constructor(props) {
    super(props);
    this.menuItems = Menu(list, selected);
    this.state = {
      data:[{
        problem:"餐饮营养",
        likes:4,
        size: 2000,
        downloads:200,
        comments:200,
        dataset:[{desc:"酥条",
        logo:fries}]
      }],
      selected:selected
    }
  }
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
    return (
      <div >
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      <img src={this.state.data[0]['dataset'][0]['logo']}/>
      </div>
    );
  }
}
