import axios from 'axios'
// resets hourly
const tempToken = 'USe4QGFrhY2cWLW2qGZ4S0XhBABaUkwl5H'

export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
