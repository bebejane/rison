import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'

const Markdown = ({ children }) => {
  return (
    <ReactMarkdown remarkPlugins={[gfm]}>{children}</ReactMarkdown>
  )
}

export default Markdown;

