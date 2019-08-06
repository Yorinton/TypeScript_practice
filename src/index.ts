import { ChooseSong } from './models/ChooseSong'

let chooseSong:ChooseSong = new ChooseSong()
let songYouShouldSing:string = chooseSong.chooseSong()

console.log(`次歌う歌はこれ！・・・${songYouShouldSing}`)