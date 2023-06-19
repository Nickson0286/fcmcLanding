import React from "react";
function Landingpage() {
  return (
    <div>
      <nav class="white" role="navigation">
        <div class="nav-wrapper container">
          <a href="#" class="brand-logo center-align">
            <img class="circle responsive-img" src="./images/logo.png" />
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="#">Navbar Link</a>
            </li>
          </ul>

          <ul id="nav-mobile" class="sidenav">
            <li>
              <a href="#">Navbar Link</a>
            </li>
          </ul>
          <a href="#" data-target="nav-mobile" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
        </div>
      </nav>
    </div>
  );
}
