import React from "react";
import * as BootStrap from "react-bootstrap";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

function Header(){


    return  (
        <>

        <BootStrap.Navbar bg="light" expand="lg">
            <div className="header-css">

        <BootStrap.Navbar.Brand href="#" >O L X</BootStrap.Navbar.Brand>
    
        <BootStrap.Navbar.Collapse id="navbarScroll" >
          <BootStrap.Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            

          </BootStrap.Nav>
          <BootStrap.Form className="d-flex ms-5"> 
            <BootStrap.FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <BootStrap.Button variant="outline-success">Search</BootStrap.Button>
            
          </BootStrap.Form>


          <BootStrap.Form className="d-flex ms-5">
            <BootStrap.FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <BootStrap.Button variant="outline-success">Search</BootStrap.Button>
          </BootStrap.Form>

        </BootStrap.Navbar.Collapse>
        
        {/* <BootStrap.Nav.Link href="#action1"><Link to="/login">Login</Link></BootStrap.Nav.Link> */}

        <NavLink className="nav-link" to="/login"  style={{textDecoration:'none'}}  >LOGIN</NavLink>

        </div>
      </BootStrap.Navbar>


      <div className="image mt-3">



    </div>



      </>

    )
}
export default Header;