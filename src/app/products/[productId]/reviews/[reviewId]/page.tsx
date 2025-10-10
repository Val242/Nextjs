import { notFound, redirect } from "next/navigation";

export default async function ProductReview({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const productId = params.productId
  const reviewId = params.reviewId
if(parseInt(reviewId) > 1000){
    //notFound()
    redirect("/products")
  }

  return <h1>Review {reviewId} for product {productId}</h1>
}
