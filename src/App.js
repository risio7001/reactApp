import { useEffect, useState } from 'react';
import './App.css';
import MainPage from './Contents/mainPage'
import Header from './Header/header'
import {isMobile, isBrowser} from 'react-device-detect';
function App() {
  function isMobileView(){
    if(isMobile){
      return<>
        <div>
          브라우저로 접속해라.
        </div>
      </>
    }else{
      return<>
      <Header/>
      <MainPage/>
    </>
    }
  }
  return (
    <div className="App">
      {isMobileView()}
    </div>
  );
}

export default App;