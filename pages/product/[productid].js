import { useRouter } from "next/router";

function ProductDeatils() {
  const router = useRouter();//! userouter useTo access value from rouer path value
  const productId = router.query.productid;
  return (
    <div>
      <h1>#7::ProductDeatils page {productId}</h1>
    </div>
  );
}
export default ProductDeatils;
