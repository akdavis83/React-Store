import React, { useState } from 'react';
import PayPalButton from './PayPalButton';


const ShoppingCart = () => {
  const products = [
    {
      id: 1,
      name: 'Mary The Perfect Disciple',
      image: 'https://thumbnails.creationswap.com/gallery/124/2/124261_3_5.jpg',
      price: 0.99,
    },
    {
      id: 2,
      name: 'eBible',
      image: 'https://thumbnails.creationswap.com/gallery/40/0/40084_3_5.jpg',
      price: 0.99,
    },
    {
      id: 3,
      name: 'Spiritual Warfare',
      image: 'https://thumbnails.creationswap.com/gallery/32/5/32578_3_5.jpg',
      price: 0.99,
    },
  ];

  const [cart, setCart] = useState([]);

  const addItemToCart = (item, e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    const existingItem = cart.find((i) => i.id === item.id);
  
    if (existingItem) {
      setCart(
        cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div id="site">
      <header id="masthead">
        <h1>Ebooks and MP3<div className="tagline">Faith Building Resources</div></h1>
      </header>
      <div id="content">
        <div id="products">
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-description" data-name={product.name} data-price={product.price}>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <form className="add-to-cart" action="/home" method="get">
                    <div>
                      <label htmlFor={`qty-${product.id}`}>Quantity</label>
                      <input type="text" name={`qty-${product.id}`} id={`qty-${product.id}`} className="qty" value="1" />
                    </div>
                    <button className="btn" onClick={(e) => addItemToCart(product, e)}>Add to Cart</button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div id="cart">
          <h2>Cart</h2>
          {cart.map(item => (
            <div key={item.id}>
              <button className="btn" onClick={clearCart}>Clear</button>
              
              <div>
                <span>{item.name}</span>
                <span>{item.price}</span>
                {/* <span>{item.quantity}</span> */}
              </div>
            </div>
          ))}
          <div id='Total'>
            <span>Total: ${calculateTotalPrice().toFixed(2)}</span>
            <PayPalButton  totalPrice={calculateTotalPrice().toFixed(2)}/>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default ShoppingCart;
