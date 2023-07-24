import React, { useState, useEffect } from 'react';
import { BarChart, Bar } from 'recharts';

interface DataPoint {
  value: number;
}

const AnimatedBarChart: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    // Mô phỏng việc cập nhật dữ liệu sau mỗi khoảng thời gian
    const interval = setInterval(generateRandomData, 400);
    return () => clearInterval(interval);
  }, []);

  const generateRandomData = () => {
    const newData: DataPoint[] = [];
    for (let i = 1; i <= 50; i++) {
      newData.push({  value: Math.random() * 300 });
    }
    setData(newData);
  };

  return (
    <BarChart style={{
        
    }}
    height={100} data={data} width={320}>
      <Bar dataKey="value" fill="white" animationDuration={400} />
    </BarChart>
  );
};

export default AnimatedBarChart;
