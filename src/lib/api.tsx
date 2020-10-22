import axios from 'axios'
// resets hourly
const tempToken = 'USbl4GBUqPkrZE6AQvNSRX7ed6097KjIdW'


export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
