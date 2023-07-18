import React from "react"

const LyricControl:React.FC = () => {

  const isLyrics = useAppSelector((state) => state.audio.isLyric)
  const dispatch = useAppDispatch()

  const handleOpenLyrics = () => {
    isLyrics
    ? dispatch(setOpenLyric(false))
    : dispatch(setOpenLyric(true))
  }

  return(
    <div
      onClick={ handleOpenLyrics }
    >
      <button className="mx-2 my-0 " title="Lyric & Karaoke">
        <IconLyric setColor="var(--color-text)" setWidth="24px" setHeight="24px" />
      </button>
    </div>
  )
}

export default LyricControl