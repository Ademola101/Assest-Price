
import SearchCoin from './Components/SearchCoin';
import PriceDisplay from './Components/PriceDisplay';
import Topfive from './Components/Topfive';
import { useLayoutEffect } from 'react';
function App() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = '#5b4379';
  });



  return (
    <div className='flex items-center flex-col' >
      <SearchCoin/>
      <PriceDisplay/>
      <Topfive/>


    </div>
  );
}

export default App;
