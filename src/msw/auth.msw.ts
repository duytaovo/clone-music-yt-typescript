import { rest } from 'msw'
import config from 'src/constants/config'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'

export const access_token_1s =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmYzNzU5MzQyZWQ2MjNlYzgzZjExMiIsImVtYWlsIjoiZHV5dGFvdm8xMTExQGdtYWlsLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjMtMDctMjhUMDc6NDc6MDcuMjAxWiIsImlhdCI6MTY5MDUzMDQyNywiZXhwIjoxNjkwNjE2ODI3fQ.MZ5VBzjovG-gHZYzIhWrv9B-v-dn1Ol_VXOnmiCSWX4'
export const refresh_token_1000days =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmYzNzU5MzQyZWQ2MjNlYzgzZjExMiIsImVtYWlsIjoiZHV5dGFvdm8xMTExQGdtYWlsLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjMtMDctMjhUMDc6NDc6MDcuMjAxWiIsImlhdCI6MTY5MDUzMDQyNywiZXhwIjoxNzA0MzU0NDI3fQ.qGjrWCsykTj71SzHArLoodwBt2gYGACtq90EJhwoufY'
export const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmYzNzU5MzQyZWQ2MjNlYzgzZjExMiIsImVtYWlsIjoiZHV5dGFvdm8xMTExQGdtYWlsLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjMtMDctMjhUMDc6NDc6MDcuMjAxWiIsImlhdCI6MTY5MDUzMDQyNywiZXhwIjoxNjkwNjE2ODI3fQ.MZ5VBzjovG-gHZYzIhWrv9B-v-dn1Ol_VXOnmiCSWX4'

const loginRes = {
  message: 'Đăng nhập thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmYzNzU5MzQyZWQ2MjNlYzgzZjExMiIsImVtYWlsIjoiZHV5dGFvdm8xMTExQGdtYWlsLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjMtMDctMjhUMDc6NDc6MDcuMjAxWiIsImlhdCI6MTY5MDUzMDQyNywiZXhwIjoxNjkwNjE2ODI3fQ.MZ5VBzjovG-gHZYzIhWrv9B-v-dn1Ol_VXOnmiCSWX4',
    expires: 999999,
    refresh_token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmYzNzU5MzQyZWQ2MjNlYzgzZjExMiIsImVtYWlsIjoiZHV5dGFvdm8xMTExQGdtYWlsLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjMtMDctMjhUMDc6NDc6MDcuMjAxWiIsImlhdCI6MTY5MDUzMDQyNywiZXhwIjoxNzA0MzU0NDI3fQ.qGjrWCsykTj71SzHArLoodwBt2gYGACtq90EJhwoufY',
    expires_refresh_token: 86400000,
    user: {
      avatar: 'a5097414-9510-4fb6-b017-217a5c4e0d5b.jpeg',
      createdAt: '2023-07-25T02:45:45.043Z',
      date_of_birth: '1989-12-31T17:00:00.000Z',
      email: 'duytaovo1111@gmail.com',
      name: 'Võ Duy Tạo11333',
      roles: ['User'],
      updatedAt: '2023-07-28T07:37:35.073Z',
      __v: 0,
      _id: '64bf3759342ed623ec83f112'
    }
  }
}

const refreshTokenRes = {
  message: 'Refresh Token thành công',
  data: {
    access_token:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmYzNzU5MzQyZWQ2MjNlYzgzZjExMiIsImVtYWlsIjoiZHV5dGFvdm8xMTExQGdtYWlsLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjMtMDctMjhUMDc6NDc6MDcuMjAxWiIsImlhdCI6MTY5MDUzMDQyNywiZXhwIjoxNjkwNjE2ODI3fQ.MZ5VBzjovG-gHZYzIhWrv9B-v-dn1Ol_VXOnmiCSWX4'
  }
}

const loginRequest = rest.post(`${config.baseUrl}login`, (req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(loginRes))
})

const refreshToken = rest.post(`${config.baseUrl}refresh-access-token`, (req, res, ctx) => {
  return res(ctx.status(HttpStatusCode.Ok), ctx.json(refreshTokenRes))
})

const authRequests = [loginRequest, refreshToken]

export default authRequests
