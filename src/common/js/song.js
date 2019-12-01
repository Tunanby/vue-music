
/**
 * @param { id } songid
 * @param { mid } songmid
 * @param { signer } 用户名称
 * @param { name } 歌曲名称
 * @param { album } 专辑名称
 * @param { image } 图片
 */
export default class Song {
    constructor({id, mid, singer, name, ablum, image}){
        this.id = id
        this.mid = mid
        this.singer = singer
        this.name = name
        this.ablum = ablum
        this.image = image
    }
}

export function songSetting(musicData) {
    return new Song({
        id: musicData.songid,
        mid: musicData.songmid,
        singer: musicData.songname,
        name: musicData.singer[0].name,
        ablum: musicData.albumname,
        image: `http://y.gtimg.cn/music/photo_new/T001R150x150M000${musicData.albummid}.jpg?max_age=2592000`
    })
}