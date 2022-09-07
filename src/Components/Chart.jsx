import React from 'react';
import { useGetMarketChartQuery } from '../api/apiSlice';
import { useSelector } from 'react-redux';
import { Line,   LineChart } from 'recharts';


export default function Chart() {
  const search = useSelector(state => state.search);
  const { data, isError } = useGetMarketChartQuery({ coin:search });
  const priceAndDate = data?.prices.map((item) => {
    return { price: item[1], date: new Date(item[0]).toLocaleDateString() };
  });




  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>

      <LineChart width={400} height={400} data={priceAndDate}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
