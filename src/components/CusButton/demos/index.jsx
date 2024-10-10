// import React, { useState } from 'react';
import React, { Component, Fragment } from 'react';
import { CusButton } from 'dfyhui';
import { Button } from 'antd';

function cusButtonDemo() {
    return (
        <div>
            <CusButton type="primary" style={{marginRight:"10px"}} onClick={() => alert(5566)}>按钮1</CusButton>
            <CusButton shape="circle" icon="search" style={{marginRight:"10px"}} />
            <CusButton type="danger" style={{marginRight:"10px"}}>按钮3</CusButton>
            <Button type="primary">antd按钮1</Button>
        </div>
    );
  }

  export default cusButtonDemo;