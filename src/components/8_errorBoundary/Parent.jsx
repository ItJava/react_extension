import React, {Component} from 'react';
import Child from "./Child";

export default class Parent extends Component {


    //当parent 的子组件出现错误的时候，会触发getDerivedStateFromError 调用，并携带错误信息
    static  getDerivedStateFromError(error){
        console.log('getDerivedStateFromError',error)
        return {hasError:error}
    }

    //统计错误数据，反馈给服务器，用于通知编码人员进行bug的解决
    componentDidCatch(error, errorInfo) {
        console.log('渲染组件出错...')

    }

    state={
        hasError:''// 用于标志组件是否产生错误
    }

    render() {
        return (
            <div>
                <h2>我是Parent 组件</h2>
                {this.state.hasError ?<h2>当前网络不稳定，稍后再试！</h2>:<Child/>}

            </div>
        );
    }


}

