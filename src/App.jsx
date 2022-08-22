
import SearchCoin from './Components/SearchCoin';
import PriceDisplay from './Components/PriceDisplay';
import Topfive from './Components/Topfive';
function App() {



  return (
    <div className='flex items-center flex-col' >
      <SearchCoin/>
      <PriceDisplay/>
      <Topfive/>


    </div>
  );
}

export default App;
