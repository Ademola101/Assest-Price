import React from 'react';
import { setSearch, } from '../reducers/Search';
import { useGetAllCoinsQuery } from '../api/apiSlice';

import { useDispatch } from 'react-redux';


export default function SearchCoin() {
  const dispatch = useDispatch();
  const clear = (e) => e.target.value ='';
  const onChange = (e) => {
    if (!e.nativeEvent.inputType) {
      e.target.blur();
    }
    dispatch(setSearch(e.target.value));
  };

  const { data: allCoins, isFetching, isError } = useGetAllCoinsQuery();

  const ids = allCoins?.map(coin => coin.id);


  if (isFetching) {
    return (<div className="flex justify-center items-center">
      <div className="spinner-border animate-spin inline-block h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>);
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <div>

      <input className='form-label inline-block mt-4  pl-5 text-white placeholder:italic placeholder:text-white rounded-md border-slate-700
       bg-slate-500' list="coin" id="coin-choice" name="coinchoice"
      placeholder='search for coin' onChange={onChange}  onClick = {clear} onFocus = {clear}/>

      <datalist id="coin">

        {ids.map(id  => <option key={id} value={id}>{id}</option>)}
      </datalist>


    </div>

  );
}
