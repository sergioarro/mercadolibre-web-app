/* eslint-disable @next/next/no-img-element */
type ProductDetailProps = {
  item: {
    title: string;
    price: {
      currency: string;
      amount: number;
      decimals: number;
    };
    picture: string;
    condition: string;
    freeShipping: boolean;
    soldQuantity?: number;
    description: string;
  };
};

const ProductDetail: React.FC<ProductDetailProps> = ({ item }) => {
  const {
    title,
    price,
    picture,
    condition,
    freeShipping,
    soldQuantity,
    description,
  } = item;

  if (!price) {
    return <p>Error: Price information is missing.</p>;
  }

  return (
    <div className="product-detail container">
      <img src={picture} alt={title} />
      <div className="product-info-detail">
        <h1>{title}</h1>
        <p className="price">
          {price.currency} {price.amount}.{price.decimals}
        </p>
        <p className="condition">{condition}</p>
        {soldQuantity !== undefined && (
          <p className="soldQuantity">Cantidad vendida: {soldQuantity}</p>
        )}
        {freeShipping && <p>Envío gratis</p>}
        <button className="buyButton">Comprar</button>
        <h2>Descripción del producto</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
