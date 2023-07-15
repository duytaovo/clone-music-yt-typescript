import React from 'react';
import ReactPlayer from 'react-player';
import test from "./test.mp3"



const BarPlayer = () => {
      return (
      <div className="ml-14 w-[90%] h-3 px-3">
        <ReactPlayer
        url={test} // Đường dẫn đến file âm thanh của bạn
        playing={false} // Điều chỉnh trạng thái phát/tạm dừng
        volume={0.5} // Điều chỉnh âm lượng
        controls={true} // Hiển thị các nút điều khiển như play/pause, tua, v.v.
        width={"90vw"}
        loop={true}
        height={200}
      />
      </div>)
}
export default BarPlayer