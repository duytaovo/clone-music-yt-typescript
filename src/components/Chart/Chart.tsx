import { ItemChart } from './Component/ItemChart'
import LineChart from '../LineChart/LineChart'

export const Chart = ({ chartHome }: any) => {

  return (
    <div>
      {chartHome && <div className='bg-bg_chart mt-5 rounded'>
        <h4 className='p-6  pl-3 font-sans text-[28px] font-semibold text-[#45CFDD] line-clamp-1'>#zingchart</h4>
        <div className='flex items-center'>
          <ItemChart dataChart={chartHome} />
          <div className='h-[280px] w-[800px]'>
          <LineChart dataChart={chartHome?.chart?.items} />
          </div>
        </div>
      </div>}
    </div>
  )
}
