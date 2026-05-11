import React from "react";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
    const rawPrice = product.priceCents ?? product.price ?? 0;
    const displayPrice = isNaN(rawPrice) ? 0 : Math.round((rawPrice / 10) * 300);

    return (
        <div className="card">
            <div className="card-header">
                <img src={product.image} alt={product.name || "Product"} />
                <span className="heart">♡</span>
            </div>

            <div className="card-body">
                <p className="brand">{product.brand || "Phillips"}</p>
                <h4>{product.name || "Product Title"}</h4>

                <StarRating 
                    rating={product.rating?.stars ?? 4} 
                    reviews={product.rating?.count ?? 104} 
                />

                <h3>₱ {displayPrice}</h3>
            </div>

            <div className="card-footer">
                <button className="cart">Add to Cart</button>
                <button className="buy">Buy Now</button>
            </div>
        </div>
    );
}

// push test 

export default ProductCard;