import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'

const Markdown = ({ children }) => {
  if(!children) return null
  return (
    <ReactMarkdown remarkPlugins={[gfm]} children={children}/>
  )
}

export default Markdown;

