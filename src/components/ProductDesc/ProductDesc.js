import './ProductDesc.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarO } from '@fortawesome/free-regular-svg-icons'

const ProductDesc = ({product}) => {
    const { category, title, description, noOfReviews, noOfStars, features, variants} = product
    const ratingStars = [...Array(noOfStars).fill(1), ...Array(5-noOfStars).fill(0)]
    return(
        <div className='product_desc'>
            <span className='product_desc_category hide_mobile'>{category}</span>
            <h1 className="product_desc_title">{title}</h1>
            <p className="product_desc_description">{description}</p>
            <div className='ratings_and_reviews'>
                <div className='rating'>
                    {ratingStars.map((val, index) => (
                        <div key={index} className='rating_star'>{val === 1? <FontAwesomeIcon icon={faStar} size="xs" /> :  <FontAwesomeIcon icon={faStarO} size="xs"/>}</div>
                    ))}
                </div>
                <div className='reviews'>{noOfReviews}</div>
            </div>
            <div className='features'>
                {features.map(({id, name, content}) => (
                    <div key={id} className='feature'>
                        <h3 className='feature_name'>{name}</h3>
                        <p className='feature_content'>{content}</p>
                    </div>
                ))}
            </div>
            <div className='variants'>
                {variants.map(({ id, name, color}) => (
                    <div key={id} className='variant'>
                        <span className="variant_name">{name}</span>
                        <span className="variant_color" style={{'backgroundColor': color}}></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductDesc