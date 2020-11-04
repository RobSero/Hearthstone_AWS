import axios from 'axios'
// resets hourly
const tempToken = 'USVM8uTaurFGSNDLz7XfR30DbPU4gUeFxS'


export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
