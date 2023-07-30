import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL_LYRIC = '/v2/api/get/song/lyric?id='

const lyricApi = {
  getLyric(params: string) {
    return http.get<SuccessResponse<any>>(`${URL_LYRIC}${params}`, {
    })
  },
}

export default lyricApi
