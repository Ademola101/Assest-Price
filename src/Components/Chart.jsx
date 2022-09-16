import React from 'react';
import { useGetMarketChartQuery } from '../api/apiSlice';
import { useSelector } from 'react-redux';
import { Line,   LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, } from 'recharts';


export default function Chart() {
  const search = useSelector(state => state.search);
  const { data, isError } = useGetMarketChartQuery({ coin:search });
  const priceAndDate = data?.prices.map((item) => {
    return { price: item[1], date: new Date(item[0]).toLocaleDateString() };
  });


  console.log(priceAndDate);

  if (isError) {
    return null;
  }
  return (
    <div className='bg-slate-50'>


      <LineChart width={600} height={400} data={priceAndDate}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: 'Prices', angle: -90, position: 'insideLeft' }} />



        <Tooltip/>
        <Legend verticalAlign="top" height={36}/>
      </LineChart>

    </div>
  );
}
