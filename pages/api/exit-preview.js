import { getPathBySlug } from '/lib/api'
import path from 'path'

export default async function exit(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()
  
  if ( !req.query.slug)
    return res.status(401).json({ message: 'Invalid token' })
  
  const query = req.query.slug

  try {
    // Fetch the headless CMS to check if the provided `slug` exists
    const type = path.dirname(query).replace(/\//g,'')
    const slug = path.basename(query)
    const location = getPathBySlug(type, slug)
    res.writeHead(307, { Location: location })
    res.end()
  }catch(err){
    return res.status(401).json({ message: 'Error previewing page!' })
  }
}