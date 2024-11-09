import React from 'react';
import LeftBar from './components/LeftBar';  
import styles from'./App.module.css';
import MainView from "./components/MainView";
function App() {
  return (
    <div className={styles.appContainer}>
        <LeftBar/>
        <MainView/>
    </div>
  );
}

export default App;
