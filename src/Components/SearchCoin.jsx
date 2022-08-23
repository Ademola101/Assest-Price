import React from 'react';
import { setSearch } from '../reducers/Search';
import { useGetAllCoinsQuery } from '../api/apiSlice';

import { useDispatch , useSelector } from 'react-redux';


export default function SearchCoin() {
  const dispatch = useDispatch();

  const search = useSelector(state => state.search);
  console.log(search);


  const { data: allCoins, isFetching, isError } = useGetAllCoinsQuery();

  const ids = allCoins ? allCoins.map(coin => coin.id) : [];


  if (isFetching) {
    return (<div className="flex justify-center items-center">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>);
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>
      <label htmlFor="coin-choice">Search for a Coin:</label>
      <input className='form-label inline-block mb-2 text-gray-700' list="coin" id="coin-choice" name="coinchoice"
        placeholder='search for coin' onChange={(e) => {

          dispatch(setSearch(e.target.value));}}/>

      <datalist id="coin">

        {ids.map(id  => <option key={id} value={id}>{id}</option>)}
      </datalist>


    </div>

  );
}
