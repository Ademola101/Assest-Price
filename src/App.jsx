
import Topfive from './Components/Topfive';
import { useLayoutEffect } from 'react';
import { useGetAllCoinsQuery } from './api/apiSlice';
import Header from './Components/Header';
import Chart from './Components/Chart';
import Footer from './Components/Footer';
import SearchCoin from './Components/SearchCoin';

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
    <div className='flex items-center flex-col h-screen' >
      <div className='grow'>
        <Header />
        <SearchCoin/>
        <div className='flex flex-col items-center justify-center'>
          <Chart/> </div>
        <Topfive/>
      </div>

      <Footer/>


    </div>
  );
}

export default App;
