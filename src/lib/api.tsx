import axios from 'axios'
// resets hourly
const tempToken = 'USRChIz84UbGrlHJ6oEb6flK0vDGhW66Vb'


export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
