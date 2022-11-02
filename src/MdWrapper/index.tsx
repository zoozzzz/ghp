// import logo from './logo.svg';
import { useEffect, useState } from "react";
import { List } from "antd";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import md from "../md/test.md";
import getMdData from "../utils/getMdData.ts";
import styles from "./index.module.less";

function MdWrapper() {
  const [markdown, setMarkdown] = useState("");
  const getData = async () => {
    const data = await getMdData(md);
    console.log(data);
    setMarkdown(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={["aaa", "bbb", "ccc"]}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
      <div className={styles.mdWrapper}>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  // style={dark}
                  language={match[1]}
                  PreTag="div"
                  {...props as any}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
          children={markdown}
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
      </div>
    </div>
  );
}

export default MdWrapper;
