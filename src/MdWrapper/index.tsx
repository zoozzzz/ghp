// import logo from './logo.svg';
import { useEffect, useState } from "react";
import { List, Spin, Tooltip } from "antd";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import mdArr from "../md";
import getMdData from "../utils/getMdData";
import styles from "./index.module.less";

function MdWrapper() {
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const getData = async (path: string) => {
    setLoading(true);
    const data = await getMdData(path)
    setLoading(false);
    setMarkdown(data);
  };
  useEffect(() => {
    if(!mdArr || !mdArr.length) return;
    getData(mdArr[0].path);
  }, []);

  const onSelect = (md: { path: string; name: string }) => {
    getData(md.path);
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        <List
          header={<div className={styles.listHeader}>文档列表</div>}
          bordered
          dataSource={mdArr}
          renderItem={(item: { path: string; name: string }) => (
            <List.Item>
              <Tooltip title={item.name}>
                <div className={styles.mdItem} onClick={() => onSelect(item)}>{item.name || ""}</div>
              </Tooltip>
            </List.Item>
          )}
        />
      </div>
      <div className={styles.mdWrapper}>
        <Spin spinning={loading}>
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
                    {...(props as any)}
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
        </Spin>
      </div>
    </div>
  );
}

export default MdWrapper;
