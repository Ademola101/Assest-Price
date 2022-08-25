
import PriceDisplay from './Components/PriceDisplay';
import Topfive from './Components/Topfive';
import { useLayoutEffect } from 'react';
import { useGetAllCoinsQuery } from './api/apiSlice';
import Header from './Components/Header';
function App() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = 'hsl(242deg 36% 13%)';
    document.body.style.fontFamily = '"Roboto", sans-serif';
  });

  const { isLoading } = useGetAllCoinsQuery();
  if (isLoading) {
    return (<div className="flex justify-center items-center h-screen my-auto">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>);
  }


  return (
    <div className='flex items-center flex-col' >
      <Header />
      <PriceDisplay/>
      <Topfive/>


    </div>
  );
}

export default App;
