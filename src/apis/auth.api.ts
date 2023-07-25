import { AuthResponse } from 'src/types/auth.type'
import http, { http_auth } from 'src/utils/http'

export const URL_LOGIN = 'login'
export const URL_REGISTER = 'register'
export const URL_LOGOUT = 'logout'
export const URL_REFRESH_TOKEN = 'refresh-access-token'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http_auth.post<AuthResponse>(URL_REGISTER, body)
  },
  login(body: { email: string; password: string }) {
    return http_auth.post<AuthResponse>(URL_LOGIN, body)
  },
  logout() {
    return http_auth.post(URL_LOGOUT)
  }
}

export default authApi
