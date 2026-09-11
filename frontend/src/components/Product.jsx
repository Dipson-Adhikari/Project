
import { Card } from "react-bootstrap";

function Product({ product }) {
  return (
    <Card className="mx-3 my-3 p-4 rounded ">
      <Card.Img src={product.image}  variant="top" />

      <Card.Body>
        <Card.Title>
          <strong>{product.name}</strong>
        </Card.Title>
        <Card.Text >${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;