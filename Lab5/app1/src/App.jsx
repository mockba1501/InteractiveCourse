import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './components/MyButton'
import Information from './components/Information'
import Job from './components/Job'
import Education from './components/Education'

function App() {
  let content;
  let flag = true;
  
  if(flag)
  {
    content = <Job/>
  }
  else
  {
    content = <Education/>
  }

  return (
  <div>
  <h1>Hello My Name is Mohammed</h1>
  <MyButton/>
  <Information home="Estonia" study="DLG" like="Horse Riding"/>
  {content}
  <h3>---------- New approach ----------</h3>
  {flag? (<Job/>): (<Education/>)}
  <h3>---------- Additional approach ----------</h3>
  {flag && <Education/>}
  </div>
  )
}

export default App
