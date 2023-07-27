const config = {
  baseUrl: 'https://api-ecom.duthanhduoc.com/',
  maxSizeUploadAvatar: 1048576 // bytes
}

export default config


export const DOMAIN = 'https://apisolfive.app.tranviet.site';

// const DOMAIN = 'http://192.168.2.55:5000';

// export const API = {
//   GET_DISCOVER_API: DOMAIN + '/api/get/home',
//   GET_HOME_CHART_API: DOMAIN + '/api/get/charthome',
//   PLAYLIST_INFO_API: DOMAIN + '/api/get/playlist/info',
//   SONG_INFO_API: DOMAIN + '/api/get/song/sound',
//   SONG_INFO_DETAILT_API: DOMAIN + '/api/get/song/info',
//   SONG_INFO_LYRIC_API: DOMAIN + '/api/get/song/lyric',
//   CREATE_PLAYLIST: DOMAIN + '/user/playlist/create',
//   UPDATE_PLAYLIST: DOMAIN + '/user/playlist/update',
//   LIKE_SONG: DOMAIN + '/user/song/like',
//   ADD_TO_PLAYLIST: DOMAIN + '/user/playlist/add/song',
//   REMOVE_TO_PLAYLIST: DOMAIN + '/user/playlist/remove/song',
//   INIT_DATA: DOMAIN + '/user/info/init',
// };

const API_V2 = {
  GET_DISCOVER_API: DOMAIN + "/v2/api/get/home",
  GET_HOME_CHART_API: DOMAIN + "/v2/api/get/charthome",
  PLAYLIST_INFO_API: DOMAIN + "/v2/api/get/playlist/info",
  SONG_INFO_API: DOMAIN + "/v2/api/get/song/sound",
  SONG_INFO_DETAILT_API: DOMAIN + "/v2/api/get/song/info",
  ARTIST_INFO_API: DOMAIN + "/v2/api/get/artist",
  SONG_INFO_LYRIC_API: DOMAIN + "/v2/api/get/song/lyric",
  SEARCH_API: DOMAIN + "/v2/api/get/song/search",
  CREATE_PLAYLIST: DOMAIN + "/v2/user/playlist/create",
  UPDATE_PLAYLIST: DOMAIN + "/v2/user/playlist/update",
  LIKE_SONG: DOMAIN + "/v2/user/song/like",
  ADD_TO_PLAYLIST: DOMAIN + "/v2/user/playlist/add/song",
  REMOVE_TO_PLAYLIST: DOMAIN + "/v2/user/playlist/remove/song",
  INIT_DATA: DOMAIN + "/v2/user/info/init",
  USER_FAVORITE_LIST: DOMAIN + "/v2/user/get/playlist/favorite",

  // auth
  GOOGLE_AUTH_LOGIN: DOMAIN + "/user/auth/google",
}