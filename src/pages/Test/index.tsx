import { ReactNode } from 'react'
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
        <Loading styles={{ height: '25vh' }} children={undefined} className={undefined} />
        <Loading styles={{ height: '25vh' }} children={undefined} className={undefined} />
        <Loading styles={{ height: '25vh' }} children={undefined} className={undefined} />
      </div>
      <Loading
        styles={{
          width: '100px',
          height: '100px',
          borderRadius: 999
        }} children={undefined} className={undefined}      />
    </div>
  )
}
export default Loadingd


