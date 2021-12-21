import React from 'react'
import './ProductImage.css'

function ProductImage({ image }) {
    const {url, alt} = image
    return (
        <div className="product_image">
            <img src={url} alt={alt} />
        </div>
    )
}

export default ProductImage