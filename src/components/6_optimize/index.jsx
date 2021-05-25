import React, {Component,PureComponent} from 'react';
import './index.css'

// 组件优化相关，看笔记：
/*
component 的两个问题：
1）只要执行setState()，即使不改变状态数据，组件也会重新render
2)只当前组件重新render()，就会自动重新render自组建=》效率低

效率高的做法：
只有当组建的state或props发生变化时 才 重新render()

本质原因：Component 中的shouldComponentUpdate() 总是返回true



PureComponent 组件，实现判断阀门的效果，不用自己去重写shouldComponentUpdate

 */
export default class Parent extends PureComponent {

    state={carName:"奔驰",stus:['小张','小李','小王']}

    changeCar=()=>{
        //this.setState({carName:'迈巴赫'})
        const  obj=this.state
        obj.carName='迈巴赫'
        console.log(obj===this.state)
        this.setState(obj)


    }
    addStu=()=>{
       /*
       错误的方案
       const {stus}=this.state

        stus.unshift('小刘')
        this.setState({stus: })*/

        const {stus}=this.state
        this.setState({stus:['小刘',...stus]})

    }

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {

       /!* console.log(this.props,this.state)
        console.log(nextProps,nextState)*!/

        if(this.state.carName===nextState.carName) return false
        else return true
    }*/

    render() {

        console.log('parent----render')
      const  {carName}=this.state

        return (
            <div className='parent'>
                <h3>我是Parent 组件</h3>
                <span>我的车的名字是:{carName}  名字有哪些：{}</span><br/>
                <button onClick={this.changeCar}> 点我换车</button>
                <button onClick={this.addStu}>添加一个小刘</button>

                <Child carName='奥拓'/>

            </div>
        );
    }
}



class  Child extends PureComponent{


   /* shouldComponentUpdate(nextProps, nextState, nextContext) {

        console.log(this.props,this.state)
        console.log(nextProps,nextState)

        if(this.props.carName===this.props.carName) return false
        else return true
    }*/


    render() {
        console.log('Child---render')
        return (
            <div className='child'>
                <h3>我是Child 组件</h3>
                <span>我接收到的车是 ：{this.props.carName}</span>
            </div>
        );
    }
}