import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';  //要先安装lodash,  npm i --save lodash


class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
    render() {
        return(
          <div>
            <input value={this.state.title} onChange={this.onTitleChange}/>
            <button onClick={this.onSubmit}>提交</button>
          </div>
        )
    }
    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit = () => {
        const { submitTitle } = this.props
        submitTitle(this.state.title)

        this.setState({
            title: ''
        })
    }
};
// props 类型检查
Input.propTypes = {
    submitTitle: PropTypes.func.isRequired
};




class List extends React.Component {
    render() {
        const { list } = this.props

        return (
          <ul>
            {
              list.map((item, index) => (
                <li key={item.id}>
                  <span>{item.title}</span>
                </li>
              ))
            }
          </ul>
        )
    }

    // 增加 shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) {
        // _.isEqual 做 对象 或者 数组 的  深度比较（一次性递归到底）
        if (_.isEqual(nextProps.list, this.props.list)) {
            // 相等，则不重复渲染
            return false
        }
        return true // 不相等，则渲染
    }
};
// props 类型检查
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
};



class SCUDemoTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 'id-1',
                    title: '标题1'
                },
                {
                    id: 'id-2',
                    title: '标题2'
                },
                {
                    id: 'id-3',
                    title: '标题3'
                }
            ]
        }
    }
    render() {
        return (
          <div>
            <Input submitTitle={this.onSubmitTitle}/>
            <List list={this.state.list}/>
          </div>
        )
    }
    onSubmitTitle = (title) => {
        // 正确的用法
        this.setState({
            list: this.state.list.concat({
                id: `id-${Date.now()}`,
                title
            })
        })

        // // 为了演示 SCU ，故意写的错误用法
        // this.state.list.push({
        //     id: `id-${Date.now()}`,
        //     title
        // })
        // this.setState({
        //     list: this.state.list
        // })
    }
};

export default SCUDemoTwo;


// ------------------------------------------- 我是分割线 ----------------------------------------------

// // 不可变值（函数式编程，纯函数） - 数组
// const list5Copy = this.state.list5.slice()
// list5Copy.splice(2, 0, 'a') // 中间插入/删除
// this.setState({
//     list1: this.state.list1.concat(100), // 追加
//     list2: [...this.state.list2, 100], // 追加
//     list3: this.state.list3.slice(0, 3), // 截取
//     list4: this.state.list4.filter(item => item > 100), // 筛选
//     list5: list5Copy // 其他操作
// })
// // 注意，不能直接对 this.state.list 进行 push pop splice 等，这样违反不可变值

// // 不可变值 - 对象
// this.setState({
//     obj1: Object.assign({}, this.state.obj1, {a: 100}),
//     obj2: {...this.state.obj2, a: 100}
// })
// // 注意，不能直接对 this.state.obj 进行属性设置，这样违反不可变值

