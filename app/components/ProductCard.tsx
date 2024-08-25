/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type ProductCardProps = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  freeShipping: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  picture,
  condition,
  freeShipping,
}) => {
  return (
    <div className="product-card">
      <img src={picture} alt={title} />
      <div className="product-info">
        <h2>{title}</h2>
        <p>
          {price.currency} {price.amount}.{price.decimals}
        </p>
        <p>{condition}</p>
        {freeShipping && <p>Free Shipping</p>}
        <Link href={`/product/${id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
