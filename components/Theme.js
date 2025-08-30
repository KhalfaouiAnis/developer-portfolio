"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

const Theme = ({ children, ...props }) => {
  const [mount, setMount] = useState(false);
  useEffect(() => setMount(true), []);

  if (!mount) return null;

  return <ThemeProvider {...props}>{children}</ThemeProvider>;
};

export default Theme;
