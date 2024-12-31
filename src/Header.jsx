import { CartContext } from './contexts.jsx'
import { useContext } from 'react'

export default function Header() {
    const [cart] = useContext(CartContext)
    return (
        <nav>
            <h1 className="logo">Padre Gino's Pizza</h1>
            <div className="nav-cart">
                🛒<div className="nav-cart-number">{cart.length}</div>
            </div>
        </nav>
    )
}
