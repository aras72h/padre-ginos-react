import React from 'react'
import { createRoot } from 'react-dom'

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, 'Pizza'),
        React.createElement('p', {}, 'Pepperoni pizza'),
    ])
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(React.createElement(App))

export default App
