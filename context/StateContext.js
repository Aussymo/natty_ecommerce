import React, { createContext, useContext, useState, useEffect} from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        // Is Item In Cart?
        const checkProductInCart = cartItems.find((item) => item._id === product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities ((prevTotalquantities) => prevTotalquantities + quantity)

        if(checkProductInCart) {
            // adding item that already exists in cart
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity,
                }
            })

            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            
            setCartItems([...cartItems, {...product}]);
        }

        toast.success(`${qty} ${product.name} added to cart!`)
    }

    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const tempCart = cartItems.filter((item) => item._id !== product._id);
        setTotalPrice(totalPrice - foundProduct.price * foundProduct.quantity);
        setTotalQuantities(totalQuantities - foundProduct.quantity);
        setCartItems(tempCart);
      };

    const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
    
        if (value === 'inc') {
          foundProduct.quantity += 1;
          cartItems[index] = foundProduct;
          setTotalPrice(totalPrice + foundProduct.price);
          setTotalQuantities(totalQuantities + 1);
        }
    
        if (value === 'dec') {
          if (foundProduct.quantity > 1) {
            foundProduct.quantity -= 1;
            cartItems[index] = foundProduct;
            setTotalPrice(totalPrice - foundProduct.price);
            setTotalQuantities(totalQuantities - 1);
          }
        }
      };

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }
    const decQty = () => {
        setQty((prevQty) => {
        if(prevQty - 1 < 1) return 1;

        return prevQty - 1  
        }) 
    }

    return (
        <Context.Provider
            value={{
                setShowCart,
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuantity,
                onRemove,
                setCartItems,
                setTotalPrice,
                setTotalQuantities 
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);