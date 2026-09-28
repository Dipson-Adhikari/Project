
import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
} from "react-bootstrap";
import { useParams, Link } from "react-router";

function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const resp = await fetch(`/api/products/${id}`);
      const data = await resp.json();

      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <>
      <Link to="/" className="btn btn-primary my-2">
        Go Back
      </Link>

      {product && (
        
<Row>
  {/* Product Image */}
  <Col md={6}>
    <Image
      src={product.image}
      alt={product.name}
      fluid
    />
  </Col>

  {/* Product Information */}
  <Col md={3}>
    <ListGroup variant="flush">
      <ListGroup.Item>
        <h2>{product.name}</h2>
      </ListGroup.Item>

      <ListGroup.Item>
        Rating: {product.rating} ⭐
      </ListGroup.Item>

      <ListGroup.Item>
        {product.description}
      </ListGroup.Item>
    </ListGroup>
  </Col>

  {/* Price / Cart */}
  <Col md={3}>
    <ListGroup variant="flush">
      <ListGroup.Item>
        Price: ${product.price}
      </ListGroup.Item>

      <ListGroup.Item>
        {product.countInStock > 0
          ? "In Stock"
          : "Out of Stock"}
      </ListGroup.Item>

      <ListGroup.Item>
        <button className="btn btn-primary">
          Add to Cart
        </button>
      </ListGroup.Item>
    </ListGroup>
  </Col>
</Row>


      )}
    </>
  );
}

export default ProductDetailPage;
