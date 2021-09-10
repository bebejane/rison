import { getObjectBySlug } from '../../controllers'
import path from 'path'

export default async function preview(req, res) {
  if ( req.query.secret !== process.env.DATOCMS_PREVIEW_SECRET || !req.query.slug)
    return res.status(401).json({ message: 'Invalid token' })
  
  const query = req.query.slug

  try {
    const type = path.dirname(query).replace(/\//g,'')
    const slug = path.basename(query)
    const post = await getObjectBySlug(type, slug, true)
    
    if (!post)
      return res.status(401).json({ message: 'Invalid slug' })
      
    res.setPreviewData({}, {maxAge: 10})
    res.writeHead(307, { Location: `/${post._slug}` })
    res.end()
  }catch(err){
    console.error(err)
    return res.status(401).json({ message: 'Error previewing page!' })
  }
}