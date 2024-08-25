import { Metadata } from "next";
import { getItemById } from "@/services/api";
import ProductDetail from "@/components/ProductDetail";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const item = await getItemById(params.id);
  return {
    title: `${item.title} - Detalles del Producto`,
    description: item.description,
  };
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const item = await getItemById(params.id);

  return (
    <div>
      <ProductDetail {...item} />
    </div>
  );
};

export default ProductPage;
