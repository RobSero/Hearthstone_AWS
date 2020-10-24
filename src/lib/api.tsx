import axios from 'axios'
// resets hourly
const tempToken = 'USBZDi8ev8xNmwhA2oG2I5vRY0XXhjhr5u'


export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
