import axios from 'axios'
// resets hourly
const tempToken = 'USx4732RL7Cxp1G8lrWkhIv4JLnjErPYp9'


export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
