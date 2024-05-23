import React from 'react';

function Header() {
  return (
    <header id="header" className="header-section">
      <div className="top-header">
        <div className="container">
          <div className="top-content-wrap row">
            <div className="col-md-8">
              <ul className="left-info">
                <li><a href="#"><i className="ti-email"></i>Info@YourDomain.com</a></li>
                <li><a href="#"><i className="ti-mobile"></i>+(333) 052 39876</a></li>
                <li>Have any question?</li>
              </ul>
            </div>
            <div className="col-md-4 d-none d-md-block">
              <ul className="right-info">
                <li><a href="#">Register</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container">
          <div className="bottom-content-wrap row">
            <div className="col-md-3">
              <div className="site-branding">
                <a href="index.html"><img src="img/logo.png" alt="Brand" /></a>
              </div>
            </div>
            <div className="col-md-9 d-none d-md-block text-right">
              <ul id="mainmenu" className="nav navbar-nav nav-menu">
                <li className="active"> <a href="index.html">Home</a>
                  <ul>
                    <li><a href="index.html">Home Default</a></li>
                    <li><a href="index-2.html">Home Modern</a></li>
                  </ul>
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="courses.html">Courses</a></li>
                <li><a href="events.html">Events</a></li>
                <li><a href="#">Pages</a>
                  <ul>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="team.html">Team</a></li>
                    <li><a href="404.html">404 Not Found</a></li>
                  </ul>
                </li>
                <li><a href="blog-grid.html">Blog</a>
                  <ul>
                    <li><a href="blog-grid.html">Blog Grid</a></li>
                    <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                    <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                    <li><a href="blog-list-classic.html">Classic List</a></li>
                    <li><a href="blog-list-modern.html">Modern List</a></li>
                    <li><a href="blog-single.html">Blog Single</a></li>
                  </ul>
                </li>
                <li> <a href="contact.html">Contact</a></li>
              </ul>
              <a href="#" className="default-btn">Register Now</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;