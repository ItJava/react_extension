import React, {Component} from 'react';
/*
类式组件写法
export default class Demo extends Component {

    state={count:0}

    add=()=>{
        this.setState(state=>({count:state.count+1}))
    }

    render() {
        return (
            <div>
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>点我加一</button>
            </div>
        );
    }
}
*/
function Demo(){

    const [count,setCount]=React.useState(0)
    const [name,setNmae]=React.useState('wangfangchen')

  function  add(){
      // setCount(count+1)  // 第一种写法：参数为费函数值，直接指定新的状态值，内部勇气覆盖原来的值
      setCount(count=> count+1)                     // 参数为函数，接收原来的状态值，返回新的状态值，内部用其覆盖原来的值
    }

  function  changeName(){
      //  this.setState(state=>({count:state.count+1}))

      setNmae('caixia')  // 参数为函数，接收原来的状态值，返回新的状态值，内部用其覆盖原来的值


    }

    return (
        <div>
            <h2>当前求和为{count}</h2>
            <h2>我的名字是:{name}</h2>
            <button onClick={add}>点我加一</button>
            <button onClick={changeName}>点我改名</button>
        </div>

    )

}


export default  Demo
