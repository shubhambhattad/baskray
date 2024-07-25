"use client";
import { RecoilRoot } from "recoil";

export default function EMILayout({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
