import React from "react";

function Footer() {
  return (
    <div>
      <footer class="page-footer amber">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5>Company Bio</h5>
              <p>
                We are a team of college students working on this project like
                it's our full time job. Any amount would help support and
                continue development on this project and is greatly appreciated.
              </p>
            </div>
            <div class="col l3 s12">
              <h5>Settings</h5>
              <ul>
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>
            <div class="col l3 s12">
              <h5>Connect</h5>
              <ul>
                <li>
                  <a href="#!">Link 1</a>
                </li>
                <li>
                  <a href="#!">Link 2</a>
                </li>
                <li>
                  <a href="#!">Link 3</a>
                </li>
                <li>
                  <a href="#!">Link 4</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright amber text-darken-2">
          <div class="container">
            Made by
            <a
              class="amber"
              style="color: #bcaaa4;"
              href="https://materializecss.github.io/materialize"
              target="_blank"
              rel="noopener noreferrer"
            >
              Materialize
            </a>
            Modified by
            <a class="amber">Fog City Medical Clinic</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
