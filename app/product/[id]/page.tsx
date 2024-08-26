import { Metadata } from "next";
import { getItemById } from "@/services/api";
import ProductDetail from "@/components/ProductDetail";
import Head from "next/head";

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
    <>
      <Head>
        <title>{item.title} - Detalles del Producto</title>
        <meta name="description" content={item.description} />
        <meta property="og:title" content={item.title} />
        <meta property="og:description" content={item.description} />
        <meta property="og:image" content={item.picture} />
        <meta
          property="og:url"
          content={`https://tu-dominio.com/product/${params.id}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index,follow" />
      </Head>
      <div>
        <ProductDetail {...item} />
      </div>
    </>
  );
};

export default ProductPage;
