import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center", // Centers the entire header horizontally
        alignItems: "center",     // Centers the content vertically
        padding: "12px",
        fontFamily: "Times New Roman"
      }}
    >
      <div style={{ 
        margin: "0px 20px",
    
        
       }}

        >
        <Link to="/">Home</Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",   // Adds space between the links
          paddingTop: "30px",
          fontFamily: "Times New Roman",
          color: "red"
        }}
      >
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/Illustration">Illustration</Link>

      </div>
    </div>
  );
};

export default Header;

