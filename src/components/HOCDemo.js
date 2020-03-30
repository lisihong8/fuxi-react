
import React from 'react';

const WithMouse = (VariableComponent)=> {

  class WithMouseComponent extends  React.Component {
      constructor(props) {
        super(props);
        this.state = {
          x:0,
          y:0
        }
      }
      handleMouseMove = (event)=> {
          console.log(event);
          this.setState({
            x:event.clientX,
            y:event.clientY
          })
       
      }
      render() {
        return (
          <div style={{height:'500px'}} onMouseMove={this.handleMouseMove}>
              {/* 1.透传所有props   2.增加mouse变量属性,mouse变量属性的值 是等于这个组件里的state里的数据传给子组件 */}
              <VariableComponent {...this.props} mouse={this.state} />
          </div>
        )
      }
  }

  return WithMouseComponent;

}

// 函数组件 : 纯函数,输入props,输出JSX,没有实例,没有生命周期,没有state,不能扩展其它方法.
const HOCDemo = (props)=> {
  const { a } = props;
  const { x, y } = props.mouse; //接收父组件传过来的mouse变量属性的值
  return (
    <div style={{height:'500px'}}>
      <h1>The mouse position is ({x},{y})</h1>
  <p>{a}</p>
    </div>
  )
}
export default WithMouse(HOCDemo); //返回高阶组件
