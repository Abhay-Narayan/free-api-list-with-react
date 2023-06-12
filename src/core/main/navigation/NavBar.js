import React from "react";
import Box from "@mui/material/Box";

import Link from "./Link";

const NavBar = ({ link, route2 }) => {
  const handleMouseOver = (event) => {
    event.target.style.color = "#ffffff";
  };

  const handleMouseOut = (event) => {
    event.target.style.color = "#000000";
  };

  const linkStyle = {
    padding: 2,
    display: "block",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#313335",
    textDecoration: "none",
    textAlign: "center",
  };

  return (
    <Box
      sx={{
        display: "flex",
        marginBottom: 3,
        height: "2.5rem",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#a1a1a1",
      }}
    >
      <Box
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        sx={{ flex: 3 }}
      >
        <Link href="/" style={linkStyle}>
          Home
        </Link>
      </Box>
      {link && (
        <>
          <Box sx={{ flex: 1, textAlign: "right" }}>Catgeory:</Box>
          <Box
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            sx={{ flex: 1 }}
          >
            <Link href={link} style={linkStyle}>
              <b>{link}</b>
            </Link>
          </Box>
        </>
      )}
      {route2 && (
        <>
          <Box sx={{ flex: 1, textAlign: "right" }}>API:</Box>
          <Box
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            sx={{ flex: 1 }}
          >
            <Link style={linkStyle}>
              <b>{route2}</b>
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
};

export default NavBar;
