import path from 'src/constants/path'
import { lazy, Suspense, useRef } from 'react'
import { Route, RouteObject, Routes, useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Test from './pages/Test'
import Home from './pages/Home'
import Player from './pages/Player'
import NotFound from './pages/NotFound'

// const Home = lazy(() => import('./pages/Home'))
// const Player = lazy(() => import('./pages/Player'))
// const NotFound = lazy(() => import('./pages/NotFound'))

const routeMain = [
  {
    path: path.home,
    Component: Home
  },
  {
    path: path.playlist,
    Component: Player
  },
  {
    path: path.test,
    Component: Test
  },
  {
    path: '*',
    Component: NotFound
  }
]

export default function useRouteElements() {
  const renderRouter = () => {
    return routeMain.map(({ path, Component }, index) => {
      let Page = Component
      return <Route path={path} element={<Page />} key={index} />
    })
  }

  const routeElements = (
    <>
      <Routes>
        <Route path='' element={<MainLayout />}>
          {renderRouter()}
        </Route>
      </Routes>
    </>
  )
  return routeElements
}
