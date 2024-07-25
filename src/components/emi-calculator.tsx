"use client";
import { RecoilRoot } from "recoil";
import EMICalculator from "@/app/emi-calculator/page";

const EMICalculatorHome = () => {
  return (
    <RecoilRoot>
      <EMICalculator />
    </RecoilRoot>
  );
};

export default EMICalculatorHome;
