/* eslint-disable @next/next/no-img-element */
type ProductDetailProps = {
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  freeShipping: boolean;
  soldQuantity: number;
  description: string;
};

const ProductDetail: React.FC<ProductDetailProps> = ({
  title,
  price,
  picture,
  condition,
  freeShipping,
  soldQuantity,
  description,
}) => {
  return (
    <div className="product-detail">
      <img src={picture} alt={title} />
      <div className="product-info">
        <h1>{title}</h1>
        <p>
          {price.currency} {price.amount}.{price.decimals}
        </p>
        <p>{condition}</p>
        <p>Sold Quantity: {soldQuantity}</p>
        {freeShipping && <p>Free Shipping</p>}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
