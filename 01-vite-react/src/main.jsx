import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = React.createElement(
  'a',                                              // type
  {href: 'https://google.com', target: '_blank'},   // attributes
  'Click me to visit google'                        // value 

)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
   reactElement
)
