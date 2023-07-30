import { describe, expect, it, beforeEach } from 'vitest'
import { Http } from '../http'
import { clearLS } from '../auth'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
describe('http axios', () => {
    let http = new Http('https://api-ecom.duthanhduoc.com/').instance
    beforeEach(() => {
      localStorage.clear()
      http = new Http('https://api-ecom.duthanhduoc.com/').instance
    })
    it('Gọi API', async () => {
      const res = await http.get('me')
      expect(res.status).toBe(HttpStatusCode.Ok)
    })
  })
