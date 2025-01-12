import { CartContext } from './contexts.jsx'
import { useContext } from 'react'
import { Link } from '@tanstack/react-router'

export default function Header() {
    const [cart] = useContext(CartContext)
    return (
        <nav>
            <Link to="/">
                <h1 className="logo">Padre Gino's Pizza</h1>
            </Link>
            <div className="nav-cart">
                🛒<div className="nav-cart-number">{cart.length}</div>
            </div>
        </nav>
    )
}
