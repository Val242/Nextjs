import { Metadata } from "next";

type Props = {
  params: { productId: string };
};

// ✅ Dynamic metadata based on route parameter
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const id = params.productId;
  const title = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`iPhone ${id}`)
    },100)
  })
  return {
    title: `Product ${title}`,
  };
}

// ✅ Page component
export default async function ProductDetails({ params }: Props) {
  const productId = params.productId;
  return <h1>Details about product {productId}</h1>;
}

/*
Dynamic Metadata

🧠 Explanation:
- The `generateMetadata` function runs **on the server** before rendering.
- It lets you dynamically set metadata based on data like route params or API calls.
- In this example, the product ID from the URL is used to generate a custom title.

Example:
  Visiting /products/5 → Title: "Product 5"
*/
