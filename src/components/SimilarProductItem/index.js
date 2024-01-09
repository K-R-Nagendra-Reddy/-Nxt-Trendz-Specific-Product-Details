// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {similarityProducts} = props
  const {title, brand, price, rating, imageUrl} = similarityProducts
  return (
    <li className="one-similar-product">
      <img
        src={imageUrl}
        alt={`similar product ${title}`}
        className="similar-product-image"
      />
      <p>{title}</p>
      <p>by {brand}</p>
      <div className="similar-product-price-and-rating">
        <p>Rs {price}/- </p>
        <button type="button">
          <p>{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star-image"
          />
        </button>
      </div>
    </li>
  )
}

export default SimilarProductItem
