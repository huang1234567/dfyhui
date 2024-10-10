import React, { Component, Fragment,type FC,ReactNode } from 'react';
import { Button } from 'antd';
// import { ButtonProps } from 'antd/button'; 
// import { ButtonProps } from 'antd/es/button';
//-----------------------------1.初始使用-属性传参使用有问题-------------------------------------
// const CusButton = ({ props, children}: {props:any,children:any }) => {
//   console.log('props',props,children)
//   return (
//       <Button {...props}>{children}</Button>
//   );
// };
// export default CusButton;
//-----------------------------2.修改使用属性传参-报错中-------------------------------------
// interface Props {
//   type: string;//按钮type
//   style?: object;//样式
//   children?: ReactNode;
//   // ...other
// }
// export const CusButton: FC<Props> = (props,children) => {
//   console.log('props',props,children)
//   return (
//     // <div className="demoBlock">
//     //   {props.title && <div className="title">{props.title}</div>}
//     //   <div
//     //     className="main"
//     //     style={{
//     //       padding: props.padding,
//     //     }}
//     //   >
//     //     {props.children}
//     //   </div>
//     // </div>
//     <Button>{children}</Button>
//   );
// };

class CusButton extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    let {...other } = this.props;
    return (
      <Button {...other}></Button>
    );
  }
}

export default CusButton;

// interface IABSButtonProps {
//   /**设置按钮载入状态 */
//   loading?: boolean;
//   /**
//    * 设置危险按钮
//    * @default false
//    */
//   danger?: boolean;
//   className?: string;
//   /**按钮类型 */
//   type?: ButtonType;
//   style?: React.CSSProperties;
//   /**设置按钮的图标组件 */
//   icon?: React.ReactNode;
//   children?: React.ReactNode;
//   /**
//    * 按钮失效状态
//    * @default false
//    */
//   disabled?: boolean;
//   block?: boolean;
//   large?: boolean;
//   htmlType?: ButtonHTMLType;
//   /**按钮颜色 */
//   color?: 'blue' | 'red' | 'yellow' | 'green' | 'white';
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
// }
// export const CusButtonForm: FC<{
//   // tr-1
//     /**
//      * @description 属性名称
//      * @default "无"
//      */
//     title?: string;
//     /**
//      * @description 属性类型
//      * @default "无"
//      */
//   }> = ({ title }) => null;
//-----------------------------3.通义灵码-也报错-------------------------------------
// interface CustomButtonProps extends Omit<ButtonProps, 'type'> {
//   type?: 'link' | 'default' | 'ghost' | 'primary' | 'dashed' | 'danger'; // 限定type的可选值
//   children: any;
// }

// const CusButton: React.FC<CustomButtonProps> = (props) => {
//   const { type, ...restProps } = props;

//   // 如果type不是预期的值，则忽略它
//   // if (!['link', 'default', 'ghost', 'primary', 'dashed', 'danger'].includes(type)) {
//   //   delete restProps.type;
//   // }
//   console.log('props',props)
//   return <Button {...restProps}>{props.children}</Button>;
// };
