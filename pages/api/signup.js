import axios from 'axios'

const apiBase = 'https://api.createsend.com/api/v3.2'

export default async function signup(req, res) {
  const {email} = req.body
  
  try{
    const {data} = await axios.post(`${apiBase}/subscribers/${process.env.CAMPAIGN_MONTOR_LIST_ID}.json`,{
      EmailAddress:email,
      Name:"",
      Resubscribe: false,
      RestartSubscriptionBasedAutoresponders: true,
      ConsentToTrack:"Yes"
    },{
      auth: { username: process.env.CAMPAIGN_MONTOR_API_KEY, password:'' }
    });
    res.status(200).json({success:true, data})
  } catch(error){
    const {Message: message, Code : code} = error.response.data
    res.status(500).json({message, code})
  }
}