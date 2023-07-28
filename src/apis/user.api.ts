import { User } from 'src/types/user.type'
import { SuccessResponse } from 'src/types/utils.type'
import http, { http_auth } from 'src/utils/http'

interface BodyUpdateProfile extends Omit<User, '_id' | 'roles' | 'createdAt' | 'updatedAt' | 'email'> {
  password?: string
  newPassword?: string
}

const userApi = {
  getProfile() {
    return http_auth.get<SuccessResponse<User>>('me')
  },
  updateProfile(body: BodyUpdateProfile) {
    return http_auth.put<SuccessResponse<User>>('user', body)
  },
  uploadAvatar(body: FormData) {
    return http_auth.post<SuccessResponse<string>>('user/upload-avatar', body, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}

export default userApi
