

import React from 'react';

// 非受控组件

class UncontrolledDemo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '双越',
            flag: true,
        }
        this.nameInputRef = React.createRef(); // 创建 ref
        this.fileInputRef = React.createRef(); // 创建 ref
    }

    render() {

        // return (
        //     <div>
        //         {/* 使用 defaultValue 而不是 value ，使用 ref ,state里的值只是作为input的默认初始值,之后 不受state里的值的影响 叫做非受控组件 */}
        //         <input defaultValue={this.state.name} ref={this.nameInputRef}/>
        //         {/* state 并不会随着改变 */}
        //         <span>this.state.name: {this.state.name}</span>
        //         <br/>
        //         <button onClick={this.alertName}>alert name</button>
        //     </div>
        // )




        // //在非受控组件 checkbox 里要使用 defaultChecked 而不是 checked ,而在受控组件里checkbox才是使用checked
        // return (
        //     <div>
        //         <input
        //             type="checkbox"
        //             defaultChecked={this.state.flag}
        //         />
        //     </div>
        // )



        // file
        return (
            <div>
                <input type="file" ref={this.fileInputRef}/>
                <button onClick={this.alertFile}>alert file</button>
            </div>
        )




    }

    
    // alertName = () => {
    //     console.log(this.nameInputRef)
    //     console.log(this.nameInputRef.current)
    //     console.log(this.nameInputRef.current.value)
    //     const elem = this.nameInputRef.current // 通过 ref 获取 DOM 节点
    //     alert(elem.value) // 不是 this.state.name
    // }


    alertFile = () => {
        const elem = this.fileInputRef.current // 通过 ref 获取 DOM 节点
        alert(elem.files[0].name)
    }
}

export default UncontrolledDemo;
