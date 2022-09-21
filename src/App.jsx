
import Topfive from './Components/Topfive';
import { useLayoutEffect } from 'react';
import { useGetAllCoinsQuery } from './api/apiSlice';
import Header from './Components/Header';
import Chart from './Components/Chart';
import Footer from './Components/Footer';
import SearchCoin from './Components/SearchCoin';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function App() {
  useLayoutEffect(() => {
    document.body.style.backgroundColor = 'hsl(242deg 36% 13%)';
    document.body.style.fontFamily = '"Roboto", sans-serif';
  });

  const { isLoading } = useGetAllCoinsQuery();

  while (isLoading) {
    return (<div className="flex justify-center items-center h-screen my-auto  text-white">
      <div  role="status">
        <AiOutlineLoading3Quarters className="spinner-border animate-spin inline-block "/>
        <span className="visually-hidden text-lg"> Loading, Please wait</span>
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
