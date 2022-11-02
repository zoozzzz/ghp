// import logo from './logo.svg';
// import { useEffect, useState } from 'react';
import './App.css';
import MdWrapper from '@/MdWrapper/index.tsx';
// import ReactMarkdown from 'react-markdown';
// import md from './md/test.md';
// import getMdData from './utils/getMdData.js';

function App() {
  // const [markdown, setMarkdown] = useState('');
  // const getData = async () => {
  //   const data = await getMdData(md);
  //   console.log(data);
  //   setMarkdown(data);
  // }
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div>
     <MdWrapper />
    </div>
  );
}

export default App;
