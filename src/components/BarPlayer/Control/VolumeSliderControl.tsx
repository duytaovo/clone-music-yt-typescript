import React from "react"

const VolumeSliderControl: React.FC<{auRef: HTMLAudioElement | null | undefined}> = ({ auRef }) => {

  // const volume:number | null = useAppSelector((state) => state.audio.volume)
  // const dispath = useAppDispatch()

  return(
    // <Slider
    //   setWidth={"84px"}
    //   setHeight={"4px"}
    //   percentSlider={Number(volume) * 100}
    //   toogleTooltip={false}
    //   getPercentSlider={(value: number) => {
    //     if(auRef) {
    //       localStorage.setItem("volume", String(value / 100))
    //       dispath(setVolume(
    //         value / 100
    //       ))
    //       auRef.volume = value / 100
    //     }
    //   }}
    // />
    <div></div>
  )
}

export default VolumeSliderControl