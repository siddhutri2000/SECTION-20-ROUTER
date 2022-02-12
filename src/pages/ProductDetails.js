import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const params = useParams();

  console.log(params.productId);

  return (
    <section>
      <h1>product details</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetails;
