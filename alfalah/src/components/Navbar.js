import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  let links = document.querySelectorAll('link')
  console.log(links);
  links.forEach((element,index) => {
    if(element.active){
      element.classList += " active"
    }
  else{
    
  }
  });
  return (
    <div>
      <nav className="navbar navbar-expand-lg fontColor">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src="/imageslogos/whitebglogo.jpg" alt="" width="50" height="40" style={{border:"1px solid black",borderRadius:"5px"}} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse dropdown-menu-md" id="navbarNavAltMarkup">
            <div className="navbar-nav container align-right">

              <Link className="nav-link " aria-current="page" to="/Home">Home</Link>
              <Link className="nav-link " aria-current="page" to="/Magazines">Magazines</Link>
              <Link className="nav-link " aria-current="page" to="/Columns">Columns</Link>
              {/* <Link className="nav-link " aria-current="page" to="/Blogs.js">Blogs</Link> */}
              {/* <Link className="nav-link " aria-current="page" to="/Images.js">Images */}
              {/* </Link> */}
              <Link className="nav-link " aria-current="page" to="/About">About</Link>
              {/* <Link className="nav-link " aria-current="page" to="/Contact.js">Contact</Link> */}
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}
