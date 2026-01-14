import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      borderRadius: 0,
      borderLeft: 'none',
      borderRight: 'none',
      borderTop: 'none'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '80px'
      }}>
        <div className="logo font-tech" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--neon-blue)', zIndex: 1001 }}>
          MEHDI<span style={{ color: 'var(--text-main)' }}>.NZ</span>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer', zIndex: 1001 }} onClick={toggleMenu}>
          {isOpen ? <X size={24} color="var(--text-main)" /> : <Menu size={24} color="var(--text-main)" />}
        </div>

        {/* Desktop Links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link font-tech"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
