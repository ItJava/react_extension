import React, {Component} from 'react';

export default class Demo extends Component {

    state={count:0}

    add=()=>{

       /*
       对象式 的 setState
       // 1-获取原来的count 的值  2-跟新状态
        const {count}=this.state
        this.setState({count: count+1},()=>{
            console.log('count:',this.state.count)
        })*/

        //函数式 setState
        this.setState(state=>({count:state.count+1}))

    }

    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <button onClick={this.add}> 点我+1</button>
            </div>
        );
    }
}


