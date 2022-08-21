import React from 'react';
import { useGetCoinQuery } from '../api/apiSlice';


export default function Topfive() {
  const { data: topfive } = useGetCoinQuery({ coin:'bitcoin', curr:'usd' });
  return (
    <div>{topfive}</div>
  );
}
