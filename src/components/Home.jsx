import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Head from './Head';
import Body from './Body';
import Preloader from './Preloader';

function Home({data}) {
    const [dataArr, setDataArr] = useState([]);

    console.log(data);
    useEffect(() => {
        if (parseInt(data)) {
            setDataArr(prevDataArr => [...prevDataArr, parseInt(data)]);
        }
    }, [data]);

    useEffect(() => {
        console.log(dataArr);
    }, [dataArr]);


  return (
    <div>
      {dataArr.length > 0 ? (
        <>
          <Sidebar />
          <div className='w-[80%] h-[100]%'>
            <Head />
            <Body />
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </div>
  );
}

export default Home;
