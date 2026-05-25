import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <nav className="nn-navbar navbar navbar-expand-lg sticky-top">
      <div className="container-xl">

        {/* Brand */}
        <NavLink to="/" className="navbar-brand nn-brand" onClick={close}>
          <span className="nn-brand__name">NaturaNest</span>
          <small className="nn-brand__tagline d-block">Pure. Natural. Healthy.</small>
        </NavLink>

        {/* Hamburger */}
        <button
          className="navbar-toggler nn-toggler"
          type="button"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { to: '/',         label: 'Home',     end: true },
              { to: '/products', label: 'Products'            },
              { to: '/about',    label: 'About Us'            },
              { to: '/contact',  label: 'Contact'             },
            ].map(({ to, label, end }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `nav-link nn-nav-link${isActive ? ' nn-nav-link--active' : ''}`
                  }
                  onClick={close}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;