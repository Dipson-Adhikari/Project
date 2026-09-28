import { Container } from "react-bootstrap";
import { Outlet } from "react-router";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />

      <main className="my-3">
        <Container>
          <Outlet />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;