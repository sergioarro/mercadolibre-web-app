import { getItemById } from "@/services/api";
import ProductDetail from "@/components/ProductDetail";

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const item = await getItemById(params.id);

  return (
    <div>
      <ProductDetail {...item} />
    </div>
  );
};

export default ProductPage;
