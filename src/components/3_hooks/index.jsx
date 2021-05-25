import React, {Component} from 'react';
import  ReactDOM from 'react-dom'

/*
export default class Demo extends Component {

    state={count:0}

    myRef=React.createRef()

    add=()=>{
        this.setState(state=>({count:state.count+1}))
    }


    show=()=>{
        //this.setState(state=>({count:state.count+1}))
        alert(this.myRef.current.value)
    }


    unmount=()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    componentDidMount() {

      this.timer=  setInterval(()=>{
            this.setState(state=>({count:state.count+1}))
        },1000)

    }

    componentWillUnmount() {

        clearInterval(this.timer)

    }


    render() {
        return (
            <div>
                <input type='text' ref={this.myRef} />
                <h2>当前求和为{this.state.count}</h2>
                <button onClick={this.add}>点我加一</button>
                <button onClick={this.unmount}>卸载组件</button>
                <button onClick={this.show}>显示数据</button>
            </div>
        );
    }
}
*/



function Demo(){

    const [count,setCount]=React.useState(0)
    const [name,setNmae]=React.useState('wangfangchen')

    const   myRef=React.createRef()


    function  add(){
      // setCount(count+1)  // 第一种写法：参数为费函数值，直接指定新的状态值，内部勇气覆盖原来的值
      setCount(count=> count+1)                     // 参数为函数，接收原来的状态值，返回新的状态值，内部用其覆盖原来的值
    }

  function  changeName(){
      setNmae('jack')  // 参数为函数，接收原来的状态值，返回新的状态值，内部用其覆盖原来的值
    }


    function  show(){
        //this.setState(state=>({count:state.count+1}))
        alert(myRef.current.value)
    }


    React.useEffect(()=>{
        console.log('@','')
     let timer= setInterval(()=>{
            setCount(count=> count+1)                     // 参数为函数，接收原来的状态值，返回新的状态值，内部用其覆盖原来的值

        },1000)

        return ()=>{
            //console.log('useEffect...')
            clearInterval(timer)
        }


    },[])
   // },[count,name])




    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }



    return (
        <div>
            <input type='text' ref={myRef} />

            <h2>当前求和为{count}</h2>
            <h2>我的名字是:{name}</h2>
            <button onClick={add}>点我加一</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>显示数据</button>

        </div>

    )

}


export default  Demo
