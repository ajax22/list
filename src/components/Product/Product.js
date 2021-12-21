import ProductDesc from "../ProductDesc/ProductDesc"
import ProductImage from "../ProductImage/ProductImage"
import ProductPurchase from "../ProductPurchase/ProductPurchase"
import './Product.css'

const Product = ({ product }) => {
    const { image, price, category } = product
    return (
        <div className='product_container'>
            <div className="product_container_left_section">
                <span className='product_category hide_desktop'>{category}</span>
                <ProductImage image={image}  />
            </div>
            <div className='product_container_right_section'>
                <ProductDesc product={product} />
                <ProductPurchase price={price} />
            </div>
        </div>
    )
}

export default Product
