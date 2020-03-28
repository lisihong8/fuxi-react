import React from 'react';
import ReactDom from 'react-dom';
import './style.css';


class PortalsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {

    // 正常渲染
    return(
      <div className="modal1">
          {this.props.children} {/*这个类似于 vue 的 slot */}
      </div>
    )
  }
}
export default PortalsDemo;
