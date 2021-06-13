import { useEffect, useState } from 'react';
import './App.css';
import MainPage from './Contents/mainPage'
import Header from './Header/header'
import { isMobile, isBrowser } from 'react-device-detect';
import Login from './Contents/login'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  // const [size, setSize] = useState();
  // useEffect(()=>{
  //   if (window.innerWidth <= 1000) {
  //     setSize(true);
  //   }
  //   else {
  //     setSize(false);
  //   }
  // },[]);
  
  // function reSize() {
  //   if (window.innerWidth <= 1000) {
  //     setSize(true);
  //   }
  //   else {
  //     setSize(false);
  //   }
  // }

  // useEffect(() => {     // 사이즈가 바뀔때마다 사이즈를 찾는부분
  //   window.addEventListener('resize', reSize)
  //   return () => { window.removeEventListener('resize', reSize); }

  // }, [reSize]);

  return (
    <div className="App">
          <BrowserRouter>
            <Header />
              <Route exact path="/">
                <MainPage />
              </Route>
              <Route exact path="/Login">
                <Login />
              </Route>
          </BrowserRouter>
    </div>
  );
}

export default App;