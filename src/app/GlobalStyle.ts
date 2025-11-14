"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root { --container: 1120px; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    color: #111;
    background: #fff;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
    line-height: 1.6;
  }
  main > section { padding: 96px 24px; }
  .container { max-width: var(--container); margin: 0 auto; }
  a { color: inherit; text-decoration: none; }
`;
