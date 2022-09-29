import { Link, Outlet } from 'react-router-dom'

export function Navbar() {
  return <>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="start_young.png" width="112" height="28" />
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <Link to="/" class="navbar-item">
            HOME
          </Link>

          <a class="navbar-item">
            FEATURES
          </a>

          <a class="navbar-item">
            ABOUT US
          </a>

          <a class="navbar-item">
            CHILD POVERTY IN LONDON
          </a>

          <a class="navbar-item">
            OUR AIM
          </a>

          <a class="navbar-item">
            THE BUDDY SYSTEM
          </a>

          <a class="navbar-item">
            JOIN US
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              MORE
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                MAKE A DONATION
              </a>
              <a class="navbar-item">
                GALLERY
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Outlet />
  </>
}