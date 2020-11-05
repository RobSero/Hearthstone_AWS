import axios from 'axios'
// resets hourly
const tempToken = 'USTPtKeiTafrvA501QtGAf7dYG8u4D4pi5'


export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
