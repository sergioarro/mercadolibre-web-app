/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={picture} alt={title} />
      <div className="product-info">
        <h2>{title}</h2>
        <p className="price">
          {price.currency} {price.amount}.{price.decimals}
        </p>
        <p>{condition}</p>
        {freeShipping && <p>Envio Gratis</p>}
      </div>
    </div>
  );
};

export default ProductCard;
