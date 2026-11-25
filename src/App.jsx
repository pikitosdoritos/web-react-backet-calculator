import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const initialProducts = [
  {
    id: 0,
    name: 'Sprite',
    price: 3,
    quantity: 0,
  },
  {
    id: 1,
    name: 'Coca-Cola',
    price: 2.50,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Fanta',
    price: 2.88,
    quantity: 2,
  }
]

function App() {
  const [cart, setCart] = useState(initialProducts)

  const changeQuantity = (id, quantity) => {
    setCart(cart => {
      const i = cart.findIndex(product => product.id === id)
      const product = cart[i]

      return cart.with(i, { ...product, quantity: product.quantity + quantity })
    })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <th scope='row'>{product.name}</th>
              <td>${product.price}</td>
              <td>
                <button onClick={() => changeQuantity(product.id, -1)}>-</button>
                <input type="number" value={product.quantity} />
                <button onClick={() => changeQuantity(product.id, 1)}>+</button>
              </td>
              <td>${(product.price * product.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <output>${cart.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2)}</output>
    </div>
  )
}

export default App