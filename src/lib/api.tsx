import axios from 'axios'
// resets hourly
const tempToken = 'US5G8mLLk6Spqy5dlDs7aVwwhACqiWmvvN'


export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
