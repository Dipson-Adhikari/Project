import { useState, useEffect } from "react";
import Product from "../components/Product";
import { Row, Col, Container } from "react-bootstrap";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Fetched products:", data);

        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h2>Latest Products</h2>

      <Container>
        <Row>
          {products.map((p) => (
            <Col sm={12} md={6} lg={4} xl={3} key={p._id}>
              <Product product={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;  