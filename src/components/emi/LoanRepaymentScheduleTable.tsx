import { ChangeEvent } from "react";

import { useRecoilValue, useSetRecoilState } from "recoil";

import TextField from "@/components/emi/TextField";

import { LoanRepaymentScheduleTableProps, Schedule, TProps } from "@/types";
import { toCurrency, toNumber } from "@/lib/utils";

import stateAtom from "@/atoms/stateAtom";

function LoanRepaymentScheduleTable({
  onCalculate,
}: LoanRepaymentScheduleTableProps) {
  const state = useRecoilValue(stateAtom);
  const setState = useSetRecoilState(stateAtom);

  const { prepayments, outcome } = state;

  console.log("outcome", outcome);

  const onPrepaymentsChange =
    (month: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const clonedPrepayments = Object.assign({}, prepayments);
      clonedPrepayments[month] = toNumber(value);

      setState({ ...state, prepayments: clonedPrepayments });
    };

  function formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="relative overflow-x-auto shadow-lg rounded-lg ">
      <table className="w-full text-sm text-left text-gray-500">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
          Loan Repayment Schedule (Monthly)
          <p className="mt-1 text-sm font-normal text-gray-500">
            This is a table that outlines the monthly payments required to repay
            a loan over a specified period of time. It is a detailed breakdown
            of the loan repayment process and includes information such as the
            Principal Payment, Interest Payment, Total Payment, Principal
            Outstanding, Cumulative Interest and Cumulative Principal.
          </p>
        </caption>

        <thead className="text-xs text-white uppercase bg-primary">
          <tr>
            <Th>Month</Th>
            <Th>Date</Th>
            <Th>Principal Payment</Th>
            <Th>Interest Payment</Th>
            <Th>Total Payment</Th>
            <Th>Principal Outstanding</Th>
            <Th>Cumulative Interest</Th>
            <Th>Cumulative Principal</Th>
          </tr>
        </thead>
        <tbody>
          {outcome?.schedule?.length > 0 ? (
            <>
              {outcome?.schedule.map((s: Schedule) => (
                <Tr key={s.month}>
                  <Td>{s.month}</Td>
                  <Td>{s.startingDate && formatDate(s.startingDate)}</Td>
                  <Td>{toCurrency(s.principalPayment)}</Td>
                  <Td>{toCurrency(s.interestPayment)}</Td>
                  <Td>{toCurrency(s.totalPayment)}</Td>
                  <Td>{toCurrency(s.principalOutstanding)}</Td>
                  <Td>{toCurrency(s.cumulativeInterest)}</Td>
                  <Td>{toCurrency(s.cumulativePrincipal)}</Td>
                </Tr>
              ))}
            </>
          ) : (
            <Tr>
              <Td colSpan={8}>No data</Td>
            </Tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }: TProps) {
  return (
    <th scope="col" className="px-6 py-3">
      {children}
    </th>
  );
}

function Tr({ children }: TProps) {
  return <tr className="bg-white border-b">{children}</tr>;
}

function Td({ children, ...rest }: TProps) {
  return (
    <td
      className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
      {...rest}
    >
      {children}
    </td>
  );
}

export default LoanRepaymentScheduleTable;
