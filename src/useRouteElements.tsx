import path from 'src/constants/path'
import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Test from './pages/Test'

const Home = lazy(() => import('./pages/Home'))
const Player = lazy(() => import('./pages/Player'))
const NotFound = lazy(() => import('./pages/NotFound'))


export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: path.home,
          element: (
            <Suspense>
              <Home />
            </Suspense>
          )
        },
        {
          path: path.player,
          element: (
            <Suspense>
              <Player />
            </Suspense>
          )
        },
        {
          path: path.test,
          element: (
            <Suspense>
              <Test />
            </Suspense>
          )
        },
        {
          path: '*',
          element: (
            <Suspense>
              <NotFound />
            </Suspense>
          )
        }
      ]
    }
  ])
  return routeElements
}
