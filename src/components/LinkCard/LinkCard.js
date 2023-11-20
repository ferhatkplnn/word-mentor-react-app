import React from "react";

import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Box,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LinkCard({ title, descreptionText = "", to = "/" }) {
  return (
    <Card
      as={Link}
      to={to}
      display="grid"
      alignContent="center"
      textAlign="center"
      boxShadow="base"
      _hover={{
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04);",
      }}
    >
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>

      <CardBody>
        <Box>
          <Text fontSize="sm">{descreptionText}</Text>
        </Box>
      </CardBody>
    </Card>
  );
}

export default LinkCard;
