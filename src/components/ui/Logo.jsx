import React from "react";
import { Box, Image } from "@chakra-ui/react";
import logo from "../../logo_4.png";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Image src={logo} alt="logo" />
    </Box>
  );
}
