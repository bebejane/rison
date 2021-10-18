import axios from 'axios'
import EmailValidator  from 'email-validator';

const apiEndpoint = 'https://api.createsend.com/api/v3.2'
const signupEndpoint = `${apiEndpoint}/subscribers/${process.env.CAMPAIGN_MONTOR_LIST_ID}.json`
const apiAuth = { auth: { username: process.env.CAMPAIGN_MONTOR_API_KEY, password:'' }}

/**
 * Signup to Newsletter via Campaing Monitor
 */
export default async function signup(req, res) {
  const { email } = req.body
  
  if(!EmailValidator.validate(email))
    return res.status(500).json({message:'E-mail address not valid!', code:1})
  
  try{
    const { data } = await axios.post(signupEndpoint, {
      EmailAddress:email,
      Name:'',
      Resubscribe: false,
      RestartSubscriptionBasedAutoresponders: true,
      ConsentToTrack:'Yes'
    }, apiAuth);
    res.status(200).json({success:true, data})
  } catch(error){
    const { Message: message, Code : code } = error.response.data
    res.status(500).json({message, code})
  }
}