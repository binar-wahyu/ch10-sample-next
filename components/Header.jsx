import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;

  function jsx_rightSection() {
    if (user === null) {
      return <Navbar.Text>Loading user...</Navbar.Text>;
    }

    if (error) {
      return (
        <Navbar.Text>Something went wrong when loading user data</Navbar.Text>
      );
    }

    if (user === false) {
      return (
        <Nav>
          <Link href="/login" passHref>
            <Nav.Link className={currentRoute === "/login" && "active"}>
              Login
            </Nav.Link>
          </Link>

          <Link href="/register" passHref>
            <Nav.Link className={currentRoute === "/register" && "active"}>
              Register
            </Nav.Link>
          </Link>
        </Nav>
      );
    }

    return (
      <Nav>
        <Navbar.Text>{user.username}</Navbar.Text>
        <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>
      </Nav>
    );
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref>
              <Nav.Link className={currentRoute === "/" && "active"}>
                Home
              </Nav.Link>
            </Link>

            <Link href="/tentang-kami" passHref>
              <Nav.Link
                className={currentRoute === "/tentang-kami" && "active"}
              >
                Tentang Kami
              </Nav.Link>
            </Link>

            <Link href="/hubungi-kami" passHref>
              <Nav.Link
                className={currentRoute === "/hubungi-kami" && "active"}
              >
                Hubungi Kami
              </Nav.Link>
            </Link>
          </Nav>

          {/* {jsx_rightSection()} */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
