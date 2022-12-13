import React, { ReactElement } from "react";
import { render, RenderResult } from "@testing-library/react";

import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

export const renderWithThem = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
