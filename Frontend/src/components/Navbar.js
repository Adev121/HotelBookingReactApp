import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar() {
  const UserInfo =JSON.parse(localStorage.getItem("UserInfo"));
  if(UserInfo)
  {
    console.log(UserInfo);
    console.log(UserInfo.user.name);
  }
  const handleLogout=()=>{
    localStorage.removeItem("UserInfo");
    // setTimeout(()=>{
    //   window.location.href = "/";
    // },1000)
    
  }
  
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid bg-black">
          <Link to="/" className="navbar-brand fw-bold fs-2 text-white" >RamaRooms</Link>
          <div >
          <ul className="Nav-Links d-flex">
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/bookings">Bookings</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            

          </ul>
          </div>
          {
            UserInfo? (
            <>
            <div class="dropdown">
            
  <button class="btn btn-secondary dropdown-toggle dropdwn-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="fa-solid fa-user" style={{color:"white",padding:"5px"}}></i>{UserInfo.user.name}
  </button>
  {/* <h1 className="User">{UserInfo.user.name}</h1> */}
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item" href="#">Bookings</a></li>
    <li><a class="dropdown-item" href="#" onClick={()=>handleLogout()}>Logout</a></li>
  </ul>
</div>
            </>
            ):(<>
            <form className="d-flex" role="search">
            <Link to="/register">
            <button className="btn register mx-4" type="button">
              Register
            </button>
            </Link>
            
            <Link to="/login">
            <button className="btn login" type="button">
              Login
            </button>
            </Link>
            
          </form>
            </>)
          }
          
          
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
