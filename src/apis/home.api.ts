import { List } from 'src/types/types.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URLHome = '/v2/api/get/home'
const URLCHART = '/v2/api/get/charthome'
const URLSONGSEARCH = '/v2/api/get/song/search?id='
const songApi = {

  getSongs() {
    return http.get<SuccessResponse<List>>(URLHome, {
    })
  },
  getChart() {
    return http.get<SuccessResponse<any>>(URLCHART, {
    })
  },
  getSearchSong(params:any){
    return http.get<SuccessResponse<any>>(`${URLSONGSEARCH}${params}`, {
    })
  }
}

export default songApi
