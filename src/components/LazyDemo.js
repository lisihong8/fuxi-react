import React,{Component} from 'react';

const ContextDemo = React.lazy(()=>import('./ContextDemo'));

class LazyDemo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(

      <div>
        <p>引入一个动态组件</p>
        <hr/>
        <React.Suspense fallback={<div>Loading.........</div>}>
          <ContextDemo/>
        </React.Suspense>
      </div>
      // 1.强制刷新,可看到  Loading......... (若看不到的话 就限制一下chrome网速)
      // 2.看network的js加载
    )
  }
};

export default LazyDemo;
