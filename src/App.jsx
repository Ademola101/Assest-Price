
import SearchCoin from './Components/SearchCoin';
import PriceDisplay from './Components/PriceDisplay';
import Topfive from './Components/Topfive';
import { useLayoutEffect } from 'react';
function App() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = 'hsl(242deg 36% 13%)';
    document.body.style.fontFamily = '"Roboto", sans-serif';
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
