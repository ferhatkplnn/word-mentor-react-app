import React from "react";
import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Heading boxShadow="base" p="8" textAlign="center">
      <Link to="/">Word Mentor</Link>
    </Heading>
  );
}

export default Navbar;
