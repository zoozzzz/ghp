// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import md from './md/test.md';

function App() {
  const [markdown, setMarkdown] = useState('');
  useEffect(() => {
    fetch(md)
      .then(res => res.text())
      .then(text => setMarkdown(text));

  }, []);
  return (
    <div className="App">
     <ReactMarkdown children={markdown} />
    </div>
  );
}

export default App;
