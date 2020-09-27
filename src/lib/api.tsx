import axios from 'axios'
// resets hourly
const tempToken = 'US5PlklxisXxjE2u9DMaYs3fH44oL2o5uT'


export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
