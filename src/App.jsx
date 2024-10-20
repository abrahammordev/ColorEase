
import React from 'react';
import LeftBar from './components/LeftBar';  
import styles from'./App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
        <LeftBar/>
    </div>
  );
}

export default App;
