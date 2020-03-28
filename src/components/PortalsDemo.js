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

    // // 正常渲染
    // return(
    //   <div className="modal1">
    //       {this.props.children} {/*这个类似于 vue 的 slot */}
    //   </div>
    // )

    // 使用Portals渲染到body上.
    // fixed元素要放在body上,有更好的浏览器兼容性.
    return ReactDom.createPortal(<div className="modal1">{this.props.children}</div>,document.body) //第二参数是DOM节点


  }
}
export default PortalsDemo;
