import React from "react"
// import { useAppSelector } from "../../../hooks/redux"
import { Link } from "react-router-dom"

const TrackInfo: React.FC = () => {

  // const info = useAppSelector((state) => state.audio.infoSongPlayer)

  return(
    <div className="flex items-center">
      {/* Thumbnail */}
      <img
        src={"https://photo-zmp3.zmdcdn.me/banner/3/3/6/2/3362cbc365ea9e288011b5708399c64c.jpg"}
        // alt={info.title}
        className="h-[46px] rounded-[5px]"
      />
      {/* End Thumbnail */}

      {/* Info */}
      <div className="flex flex-col justify-center h-[46px] ml-3">
        <div className="font-semibold text-base text-[color:var(--color-text)] opacity-90 mb-1 truncate cursor-default">abc</div>
        <div className="flex text-[color:var(--color-text)] text-xs opacity-60">
        {
          // info.artists &&
          // info.artists.map((e:any, i:number) => {
          //   return (
          //     <span key={i}>
          //       {
          //         (i > 0) ? (<span>, </span>) : ("")
          //       }
          //       <Link
          //         className="hover:underline"
          //         to={`/artist/${e.alias}`}
          //       >
          //         {e.name}
          //       </Link>
          //     </span>
          //   )
          // })
        }
        </div>
      </div>
      {/* End Info */}
    </div>
  )
}

export default TrackInfo
