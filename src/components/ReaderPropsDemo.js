import React from 'react';
import PropTypes from 'prop-types';

class MouseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x:0,
      y:0
    }
  }
  handleMouseMove=(event)=> {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  render() {
    return (
      <div style={{height:'500px'}} onMouseMove={this.handleMouseMove}>
        {/* 将当期state作为props,传递给render(render是一个函数组件) */}
        {this.props.render(this.state)}
      </div>
    )
  }
}
MouseComponent.propTypes = {
  render: PropTypes.func.isRequired  //必须接收一个render属性,而且必须是个函数
}


// 函数组件 是个 纯函数, 接收一个props,返回出去JSX,没有实例,没有生命周期,没有state,不能扩展其它方法....
const ReactPropsDemo = (props)=> {
  return (
    <div style={{height:'500px'}}>
      <p>{props.b}</p>
      <MouseComponent 
        render = {
          ({x,y})=> <h1> The mouse position is ({x},{y}) </h1>
        }
      />
    </div>
  )
}
// 即 定义了 MouseComponent组件,只有获取的能力,只有获取 x  y  的能力.
// 至于MouseComponent组件如何渲染,App说了算,通过 render prop 的方式告诉 Mouse

export default ReactPropsDemo;
