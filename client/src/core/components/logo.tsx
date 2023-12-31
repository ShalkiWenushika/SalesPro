import { Box, BoxProps } from "@mui/material";
import React from "react";
import { ReactComponent as LogoSvg } from "../assets/logo.svg";

type LogoProps = {
  colored?: boolean;
  size?: number;
} & BoxProps;

const Logo = ({ colored = false, size = 40, ...boxProps }: LogoProps) => {
  return (
    <Box {...boxProps}>
      <LogoSvg height={size} width={size} />
    </Box>
  );
};

export default Logo;
