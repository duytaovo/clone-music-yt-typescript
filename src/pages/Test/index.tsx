import PropTypes from 'prop-types'
import { ReactNode } from 'react'
import classNames from 'classnames/bind'
import styles from './styles.css'
import Loading from '../Loading/Loading'
interface a {
  children: ReactNode
  styles: any
  className: string
}

function Loadingd({ children, styles, className }: any) {
  return (
    <div>
      <div style={{ display: 'flex', gap: 20, paddingTop: 32 }}>
        <Loading styles={{ height: '25vh' }} />
        <Loading styles={{ height: '25vh' }} />
        <Loading styles={{ height: '25vh' }} />
      </div>
      <Loading
        styles={{
          width: '100px',
          height: '100px',
          borderRadius: 999
        }}
      />
    </div>
  )
}
export default Loadingd

Loading.propTypes = {
  styles: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
}
