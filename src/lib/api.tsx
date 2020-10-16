import axios from 'axios'
// resets hourly
const tempToken = 'USB1jgRnEm5SJzSUE5VKAsJWZ9D7mow8PA'


export async function getCardData(className:string) {
  return await axios.get(`https://us.api.blizzard.com/hearthstone/cards?locale=en_US&class=${className}&pageSize=200&access_token=${tempToken}`)
}
