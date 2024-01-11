"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const { data: session } = useSession();
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
