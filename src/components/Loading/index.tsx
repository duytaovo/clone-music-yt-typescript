import { useSelector } from 'react-redux'
import * as React from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import { RootState } from 'src/store/store'

const Loading = () => {
  const loading = useSelector((state:RootState) => state.loading.value)
  if (loading <100) {
    return (
      <div>
        <LinearProgress
          sx={{
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            zIndex: 1000
          }}
          color='success'
        />
      </div>
    )
  }
  return null
}
export default React.memo(Loading)
