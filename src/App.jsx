import { createRoot } from 'react-dom/client'
import Order from './Order.jsx'
import { StrictMode, useState } from 'react'
import PizzaOfTheDay from './PizzaOfTheDay.jsx'
import Header from './Header.jsx'
import { CartContext } from './contexts.jsx'

const App = () => {
    const cartHook = useState([])
    return (
        <StrictMode>
            <CartContext.Provider value={cartHook}>
                <div>
                    <Header />
                    <Order />
                    <PizzaOfTheDay />
                </div>
            </CartContext.Provider>
        </StrictMode>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)

export default App
