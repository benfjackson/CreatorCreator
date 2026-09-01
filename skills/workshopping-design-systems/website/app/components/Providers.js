"use client";

import { TokenProvider } from "./TokenProvider";

export default function Providers({ children }) {
  return <TokenProvider>{children}</TokenProvider>;
}
