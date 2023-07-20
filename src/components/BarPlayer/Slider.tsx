import React, { useState, useRef } from "react"
import getDuration from "src/utils/getDuration"

interface sliderProps {
  setWidth: string
  setHeight: string
  percentSlider: number
  getPercentSlider: Function
  toogleTooltip: boolean
  currentTimeSongTooltip?: number
}

const Slider: React.FC<sliderProps> = ({ setWidth, setHeight, percentSlider, getPercentSlider, toogleTooltip, currentTimeSongTooltip }) => {

  const sliderRef = useRef<HTMLDivElement>(null)

  const [isActiveSliderDotHover, setActiveSliderDotHover] = useState<boolean>(false)

  const [isActiveSliderTooltipHover, setActiveSliderTooltipHover] = useState<boolean>(false)

  const handleActiveSliderDotHover = (handle: boolean) => {
    setActiveSliderDotHover(handle)
  }

  const handleActiveSliderTooltipHover = (handle: boolean) => {
    setActiveSliderTooltipHover(handle)
  }

  return (
    <div
      className="my-[-6px] cursor-pointer"
      style={{
        width: `${setWidth}`
      }}
    >
      {/* Slider Bar Progress */}
      <div
        className="py-[6px] px-0"
        onMouseOver={() => handleActiveSliderDotHover(true)}
        onMouseOut={() => handleActiveSliderDotHover(false)}
        ref={sliderRef}
        onMouseDown={(e) => {

          if(sliderRef.current) {

            let percentSliderWidth  = (
              (e.clientX - sliderRef.current.getBoundingClientRect().left)
                / sliderRef.current.offsetWidth
            ) * 100

            percentSliderWidth = percentSliderWidth < 0
              ? 0
              : percentSliderWidth > 100
              ? 100
              : percentSliderWidth

            getPercentSlider(percentSliderWidth)
          }

          const handleMouseMove = (e: MouseEvent) => {
            if(sliderRef.current) {
              let percentSliderWidth  = (
                  (e.clientX - sliderRef.current.getBoundingClientRect().left)
                    / sliderRef.current.offsetWidth
              ) * 100

              percentSliderWidth = percentSliderWidth < 0
                ? 0
                : percentSliderWidth > 100
                ? 100
                : percentSliderWidth

              getPercentSlider(percentSliderWidth)
            }
          }

          window.addEventListener("mousemove", handleMouseMove)

          window.addEventListener(
            "mouseup",
            () => {
              window.removeEventListener("mousemove", handleMouseMove)
            }
          )
        }}
      >
        {/* Slider Bar Rail */}
        <div
          className="relative w-full hover:h-1 transition-[width,left] duration-300 bg-[hsla(0,0%,50.2%,.18)] rounded-[15px]"
          style={{
            height: `${setHeight}`
          }}
        >
          {/* React Slider Progress
          */}
          <div
            className="top-0 left-[0%] absolute z-[1] bg-[#335eea] rounded-[15px]"
            style={{
              width: `${percentSlider}%`,
              height: `${setHeight}`
            }}
          ></div>
          {/* End React Slider Process  */}

          {/* React Slider Dot
          */}
          <div
            className="absolute z-[5] w-3 h-3 top-[50%] translate-x-[-50%] translate-y-[-50%] transition-[left]"
            style={{
              left: `${percentSlider}%`
            }}
          >
            {/* Dot Handle */}
            <div
              className={"cursor-pointer w-full h-full rounded-full bg-[#fff] box-border " +
                (isActiveSliderDotHover ? "visible": "visible")
              }
              onMouseOver={() => handleActiveSliderTooltipHover(true)}
              onMouseOut={() => handleActiveSliderTooltipHover(false)}
            >
            </div>
            {/* End Dot Handle */}
            {
              // Dot Tooltip
              toogleTooltip  &&
              <div className={"top-[-10px] left-1/2 -translate-x-1/2 -translate-y-full absolute " +(isActiveSliderTooltipHover ? "visible" : "invisible")}>
                <div className="text-sm font-medium whitespace-nowrap px-[6px] py-[2px] min-w-[20px] text-center text-[#000] rounded-[5px] bg-[#fff] box-content">
                  <span>{getDuration(currentTimeSongTooltip || 0)}</span>
                </div>
              </div>
              // End Dot Tooltip
            }
          </div>
          {/* End React Slider Dot */}
        </div>
        {/* End Slider Bar Rail */}
      </div>
      {/* End Slider Bar Progress */}
    </div>
    // End Slider Bar
  )
}

export default Slider
