import React from 'react';
import { useGetMarketChartQuery } from '../api/apiSlice';
import { useSelector } from 'react-redux';
import { Line,   LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import PriceDisplay from './PriceDisplay';


export default function Chart() {
  const search = useSelector(state => state.search);
  const { data, isError } = useGetMarketChartQuery({ coin:search });

  const priceAndDate = data?.prices.map((item) => {

    return { price: item[1], date: new Date(item[0]).toLocaleDateString() };
  });

  const highestPrice = data?.prices.reduce((a, b) => {
    return a[1] > b[1] ? a : b;
  });



  console.log(priceAndDate);

  if (isError) {
    return null;
  }

  return (
    <div className='bg-slate-50 '>


      <LineChart width={700} height={400} data={priceAndDate}
        margin={{ top: 5, right: 50, left: 70, bottom: 5 }} >
        <Line type="monotone" dot={false} dataKey="price" stroke="#8884d8"  />
        <CartesianGrid stroke="#cccccc" strokeDasharray="5 5" />
        <XAxis dataKey="date"  />
        <YAxis padding={{ top: 10 }} label={{ angle: -90, position: 'insideLeft',      }}
          domain={[0, highestPrice * 2]}
          tickFormatter={(value) =>  '$' + value.toFixed(6)

          }


        />



        <Tooltip/>
        <Legend verticalAlign="top" height={36}/>
      </LineChart>

      <PriceDisplay />
    </div>
  );
}
