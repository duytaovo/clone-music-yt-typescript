import { SongDetailConfig } from 'src/types/types.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL_GET_PLAYLIST = `/v2/api/get/playlist/info?id=`
const URL_GET_SONG_FROM_PLLIST = `/v2/api/get/song/info?id=`
const _URL_GET_SONG_FROM_PLLIST = `/v2/api/get/song/info`
const URL_GET_SOUND = `/v2/api/get/song/sound?id=`

const playListApi = {
  getPlayList(params: string) {
    return http.get<SuccessResponse<any>>(`${URL_GET_PLAYLIST}${params}`, {
    })
  },
  _getPlayList(params: SongDetailConfig) {
    return http.get<SuccessResponse<any>>(`${URL_GET_PLAYLIST}`, {
      params
    })
  },
  getDetailSongFromPlayList(params: string) {
    return http.get<SuccessResponse<any>>(`${URL_GET_SONG_FROM_PLLIST}${params}`, {
    })
  },
  _getDetailSongFromPlayList(params: SongDetailConfig) {
    return http.get<SuccessResponse<any>>(`${_URL_GET_SONG_FROM_PLLIST}`, {
      params
    })
  },
  getSongSound(params: string) {
    return http.get<SuccessResponse<any>>(`${URL_GET_SOUND}${params}`, {
    })
  },
}

export default playListApi
