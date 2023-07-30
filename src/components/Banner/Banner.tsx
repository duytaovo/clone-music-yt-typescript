import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import NextArrow from '../NextArrow'
import PrevArrow from '../PreArrow/PreArrow'
import { Item } from 'src/types/types.type'
import { Key } from 'react'
import MediaControlCardComponent from './component'

interface Item2 {
  img: any,
  numberItem:number
}

export default function Banner({
  song,
  img,
}: Item & Item2) {
  const settings = {
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    autoplay:true,
   //  fade:true,
    autoplaySpeed:4000,
    nextArrow: <NextArrow numberItem={3} currentSlide={song?.items.length}/>,
    prevArrow: <PrevArrow />,
  }

  return (
    <div className='mt-3'>
      <h4 className='text-[#fff]  font-sans font-semibold text-[28px] p-6 pl-3 line-clamp-1'>{song.title}</h4>
      <Slider {...settings}>
        {song?.items?.map((song: { src: Key | null | any }, index: number) => (
          <div
            key={index}
            className='
                     h-36 w-full
                  px-3 sm:h-36
                  sm:w-full md:h-36
                  md:w-1/2 xl:h-36
                  xl:w-1/3 2xl:h-36
                  2xl:w-1/3 
                  '
          >
            {' '}
            <MediaControlCardComponent img={img} song={song} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
