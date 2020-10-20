import axios from 'axios'
// resets hourly
const tempToken = 'US0neTZJ3R6zWkidLv9xNfJovew3R8bBdi'


export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
