import React, { Component, Fragment} from 'react';
import { Button } from 'antd';

// export default class extends Component {
// }
class CountdownButton extends Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        loading:null,
        btnText:'获取验证码',
        maxCount:60,
        count:60,
        isCounting:false
      }
    }
    async completeCallback(){
     let { onClick } = this.props;
     let code=await onClick();
     if (!this.state.isCounting) {
      this.setState({isCounting:true})
      const intervalId = setInterval(() => {
        if (this.state.count > 0) {
          this.setState({count:this.state.count - 1})
        } else {
          this.setState({isCounting:false,count:60})
          clearInterval(intervalId);
        }
      }, 1000);
    }
  }
    render() {
      let {loading,...other } = this.props;
      let { isCounting, count } =this.state;
      return (
        <Button {...other} disabled={isCounting} onClick={()=>this.completeCallback()}>{isCounting? `${count}秒后重试` : '获取验证码'}</Button>
      );
    }
  }
  
  export default CountdownButton;