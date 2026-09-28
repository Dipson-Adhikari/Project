import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router";

function Product({ product }) {
  return (
    <Card className="mx-3 my-3 p-4 rounded">
      <Card.Img src={product.image} variant="top" />

      <Card.Body>
        <Card.Title className="product-title">
        <Link to={`/products/${product._id}`}>  <strong>{product.name}</strong></Link>
        </Card.Title>

        <Card.Text>${product.price}</Card.Text>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;