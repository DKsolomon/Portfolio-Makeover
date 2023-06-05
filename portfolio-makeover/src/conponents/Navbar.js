import React from 'react';


const Navbar = ({ currentPage, handlePageChange }) => {
    const styles = {
    navbarStyle: {
    background : '#525e65',
    width: '100%',
    height: '60px',
    padding: '20px',
    borderBottomLeftRadius: '50% 50%',
    borderBottomRightRadius: '50% 50%',
    boxShadow: '0px 4px 10px 0px #000000(0,0,0,0.36)',
    textAlign: 'center',
},
    link: {
        float: 'none',
        color: '#D5DECE',
        textAlign: 'center',
        padding: '14px 17px',
        justifyContent: 'center',
        textDecoration: 'solid',
        fontSize: '20px',
    }
}
      
  return (
 <nav style={styles.navbarStyle}>
    <ul>
        <li className='Navlinks'>
            <a href='#home'
            style={styles.link}
            onClick={() => handlePageChange("home")}
            className={currentPage === "home" ? "active-link" : ""}>
            Home
          </a>
        </li>
        <li className='Navlinks'>
            <a href='#About'
            style={styles.link}
            onClick={() => handlePageChange("about")}
            className={currentPage === "about" ? "active-link" : ""}>
            About
          </a>
        </li>
        <li className='Navlinks'>
            <a href='#projects'
            style={styles.link}
            onClick={() => handlePageChange("projects")}
            className={currentPage === "projects" ? "active-link" : ""}>
            Projects
          </a>
        </li>
        <li className='Navlinks'>
            <a href='#resume'
            style={styles.link}
            onClick={() => handlePageChange("resume")}
            className={currentPage === "resume" ? "active-link" : ""}>
            Resume
          </a>
        </li>
        <li className='contact'>
            <a href='#contact'
            style={styles.link}
            onClick={() => handlePageChange("contact")}
            className={currentPage === "contact" ? "active-link" : ""}>
            Fontact
          </a>
        </li>
    </ul>
    </nav>
  );
};

export default Navbar;