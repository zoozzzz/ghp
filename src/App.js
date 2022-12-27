// import logo from './logo.svg';
// import { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import './App.css';
import MdWrapper from '@/MdWrapper/index.tsx';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';

dayjs.locale('zh-cn');

function App() {
  return (
    <ConfigProvider prefixCls="automan" locale={zhCN}>
      <div>
        <MdWrapper />
      </div>
    </ConfigProvider>
  );
}

export default App;
