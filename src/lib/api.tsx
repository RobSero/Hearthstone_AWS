import axios from 'axios'
// resets hourly
const tempToken = 'US3Po5yu3q7GKx95ZMNRLsEQGScj30WFIS'


export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
