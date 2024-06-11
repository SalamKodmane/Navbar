import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-white">
      <Container style={{ gap: "10px", width: "100%",height:  "72px"}}>
        <Navbar.Brand href="#home">
          <img
            src="/images/LOGO.svg"
            alt="logo"
            style={{ fontSize: "2px", fontWeight: "700", padding: "21px 0", }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  style={{ display: "flex", justifyContent: "space-between" }}>
            <Nav.Link className="link"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Exo 2, sans-serif",
                marginLeft: "30px",
                color: "black",
                padding: "26.5px 20px",
              
              }}
              href="#features"
            >
              Home
            </Nav.Link>
            <Nav.Link  className="link"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Exo 2, sans-serif",
                padding: "26.5px 20px",
                color: "black",
              }}
              href="#pricing"
            >
              Courses
            </Nav.Link>
            <Nav.Link  className="link"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Exo 2, sans-serif",
                color: "black",
                padding: "26.5px 20px",
              }}
              href="#pricing"
            >
              Blog
            </Nav.Link>

            <NavDropdown  className="link"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Exo 2, sans-serif",
                padding: "20px 20px",
                color: "black",
              }}
              
              title="Page"
              id="collapsible-nav-dropdown"
            >
              
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  className="link"
              style={{
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Exo 2, sans-serif",
                padding: "26.5px 20px",
                color: "black",
              }}
              href="#pricing"
            >
              LearnPress Add-On
            </Nav.Link>
            <Nav.Link  className="link"
              style={{
                fontSize: "16px",
                fontFamily: "Exo 2, sans-serif",
                fontWeight: "600",
                padding: "26.5px 20px",
                color: "black",
              }}
              href="#pricing"
            >
              Premium Theme
            </Nav.Link>
          </Nav>

          <Nav.Link  className="link"
            style={{
              fontSize: "18px",
              fontWeight: "500",
              fontFamily: "Jost, sans-serif",
              padding: "22.5px 0",
            }}
            href="#deets"
          >
            Login / Register
          </Nav.Link>
         
          <img src="/images/Search.svg" alt="Search"  style={{ width:"48px", height:"48px", paddingLeft:"20px", }}/>
        
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
