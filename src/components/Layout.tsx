import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-[52px]">
      <Navbar />
      {children}
    </div>
  );
}
