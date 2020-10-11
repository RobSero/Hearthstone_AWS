import axios from 'axios'
// resets hourly
const tempToken = 'US28R0gOL9CFMktMos2KioYv6jJwkM39kc'


export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
