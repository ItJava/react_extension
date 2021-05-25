import React, {Component} from 'react';

import './index.css'

const  MyContext=React.createContext()   //创建一个用于保存数据的Context
const {Provider,Consumer}=MyContext

export default class A  extends Component {

    state={username:'tom',age:18}
    render() {
        const  {username,age}=this.state
        return (
            <div className='parent'>
                <h2>我是A组件</h2>
                <h4>我的用户名是：{username}</h4>
                 {/*<B username={this.state.username}/>*/}
                 {/*用Provider 包裹，那么这个人以及这个人后面的所有组件都能够收到数据*/}
                 <Provider value={{username:username,age:age}}>
                     <B/>
                 </Provider>

            </div>
        );
    }
}

class  B  extends  Component {
    static contextType=MyContext

    render() {
        return (
            <div className='child'>
                <h2>我是B组件</h2>
                <h4>我从A组件接收到的用户名：{this.context.username}</h4>
                {/*<h4>我从A组件接收到的用户名：{this.props.username}</h4>*/}
                {/*<C username={this.props.username}/>*/}
                <C/>
            </div>
        );
    }
}


/*
类式组件
class  C  extends  Component {
    static contextType=MyContext       //一定要声明，举个手，我要
    render() {
        console.log('@',this.context)
        const {username,age}=this.context
        return (
            <div className='grand'>
                <h2>我是C组件</h2>

                {/!*<h4>我从C组件接收到的用户名：{this.props.username}</h4>*!/}

                <h4>我从C组件接收到的用户名：{username},年龄是:{age}</h4>
             </div>
        );
    }
}*/

//函数组件 context 的另外一种用法，特别适用于 自组建和孙组件的使用：直接跨越中间组件
function C(){
    //{username},年龄是:{age}
    return (
        <div className='grand'>
            <h2>我是C组件</h2>
                <h4>我从C组件接收到的用户名：

                    <Consumer>
                        {
                            value => `${value.username},年龄是${value.age}`
                        }
                    </Consumer>



                </h4>
                </div>


    );

}



