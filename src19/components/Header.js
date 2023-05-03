import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';

const styles = {
    header: {backgroundColor:"red"}
}


function Header() {
  return (
    <header className="header" style={styles.header}>
      <h1>Home</h1>
    </header>
  );
}

export default Header;
