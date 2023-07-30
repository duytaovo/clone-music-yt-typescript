import { afterAll, afterEach, beforeAll, expect } from 'vitest'
import { setupServer } from 'msw/node'
import matchers from '@testing-library/jest-dom/matchers'
import authRequests from './src/msw/auth.msw'

expect.extend(matchers)

const server = setupServer(...authRequests)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
