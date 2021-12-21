import { useState } from "react"
import './ProductPurchase.css'

const ProductPurchase = ({ price }) => {
    const [quantity, setQuantity] = useState(1)
    const decreaseQuantity = () => {
        const updatedQuantity = quantity === 1 ? quantity : quantity -1 
        setQuantity(updatedQuantity)
    }
    const increaseQuantity = () => {
        const updatedQuantity = quantity === 10 ? quantity : quantity +1 
        setQuantity(updatedQuantity)
    }
    return (
        <div className='product_purchase'>
            <div className='product_purchase_row1'>
                <div className="product_purchase_quantity">
                    <span className="product_purchase_quantity_title">Quantity</span>
                    <span className="product_purchase_quantity_decrement" onClick={decreaseQuantity}>-</span>
                    <span className="product_purchase_quantity_value">{quantity}</span>
                    <span className="product_purchase_quantity_increment" onClick={increaseQuantity}>+</span>
                </div>
                <div className="product_purchase_type">
                    One time purchase
                </div>
            </div>
            <div className='product_purchase_row2'>
                <div className='product_purchase_price'>
                    {price}
                </div>
                <button className="product_purchase_button" onClick={() => alert('Added to Bag')}>Add to Bag</button>
            </div>
        </div>
    )
}

export default ProductPurchase