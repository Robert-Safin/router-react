import { useParams } from "react-router-dom";
const ProductDetail = () => {

  const params = useParams();

  return (
    <>
    <p>Product details</p>
    <p>{params.productId}</p>
    </>
  )
}

export default ProductDetail;
