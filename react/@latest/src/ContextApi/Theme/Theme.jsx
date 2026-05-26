import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext';

const Theme = () => {
    const {theme,setTheme} = useContext(ThemeContext);

    const changeMode = ()=>{
        setTheme(theme==='light'?'dark':'light');
    }
  return (
    <div style={{
        backgroundColor:theme==='light'?'white':'black',
        color:theme==='light'?'black':'white',
        height:'10vh'
    }}>
        <h2>hi</h2>
      <button style={{
        backgroundColor:theme==='light'?'black':'white',
        color:theme==='light'?'white':'black'
      }} onClick={changeMode}>Mode</button>
    </div>
  )
}

export default Theme
