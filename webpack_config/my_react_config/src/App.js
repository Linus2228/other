/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './app.scss'

const App = () => {
  const arr = [1, 2, 3, 4]
  const iAmJavascriptES6 = () => console.log(...arr)
  iAmJavascriptES6()

  return (
    <div>
      <p>React here!</p>
    </div>
  )
}
export default App
