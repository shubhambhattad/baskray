"use client";

import { ChangeEvent, useState } from "react";

import { useRecoilState, useResetRecoilState } from "recoil";

import { EMI, LoanRepaymentScheduleTable, TextField } from "@/components/emi";

import { CURRENCY_SYMBOL } from "@/constants/emi";
import { calculateEmiOutcome, cn, validateForm } from "@/lib/utils";

import stateAtom from "@/atoms/stateAtom";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { usePathname } from "next/navigation";

export default function EMICalculator() {
  const [state, setState] = useRecoilState(stateAtom);
  const resetState = useResetRecoilState(stateAtom);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const pathname = usePathname();
  const { loanAmount, interestRate, loanTenure, prepayments, errors } = state;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const onCalculate = () => {
    const errors = validateForm(state);

    if (Object.keys(errors).length) {
      setState({ ...state, errors });
      return;
    }

    setState({
      ...state,
      outcome: calculateEmiOutcome(
        Number(loanAmount),
        Number(interestRate),
        Number(loanTenure),
        date
      ),
      errors: {},
    });
  };

  const resetStatus =
    loanAmount !== 0 || interestRate !== 0 || loanTenure !== 0;

  return (
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-7xl py-4 sm:py-8 lg:py-12">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <h1 className="text-center text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          EMI Calculator
        </h1>

        <div className="py-6 px-6 sm:py-12 lg:px-8 flex flex-wrap gap-8">
          <div className="flex-1 min-w-52">
            <form action="#" method="post" className="mx-auto max-w-xl">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <TextField
                  name="loanAmount"
                  label="Home Loan Amount"
                  placeholder="50,00,000"
                  unit={CURRENCY_SYMBOL}
                  value={loanAmount}
                  error={errors?.loanAmount}
                  onChange={onInputChange}
                />
                <TextField
                  name="interestRate"
                  label="Interest Rate"
                  placeholder="9"
                  unit="%"
                  value={interestRate}
                  error={errors?.interestRate}
                  onChange={onInputChange}
                />
                <TextField
                  name="loanTenure"
                  label="Loan Tenure"
                  placeholder="20"
                  unit="Yr"
                  value={loanTenure}
                  error={errors?.loanTenure}
                  onChange={onInputChange}
                />

                <div className="flex flex-col gap-2 w-fit">
                  <Label>Starting Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
                <Button type="button" onClick={onCalculate}>
                  Calculate
                </Button>

                <Button
                  type="button"
                  onClick={resetState}
                  disabled={!resetStatus}
                >
                  Reset
                </Button>
              </div>
            </form>
          </div>

          <EMI />
        </div>
      </div>

      <div className={cn(pathname === "/" ? "hidden" : "block")}>
        <LoanRepaymentScheduleTable onCalculate={onCalculate} />
      </div>
    </div>
  );
}
