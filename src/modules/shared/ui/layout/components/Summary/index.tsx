import React from "react";
import WrapperSummary from "./styles/WrapperSummary";

interface SummaryProps {
  summary: string[];
}
const Summary = ({ summary }: SummaryProps) => {
  return (
    summary.map((paragraph) => (
      <WrapperSummary key={paragraph.slice(0, 9)}>{paragraph}</WrapperSummary>
    ))
  )
  
};

export default Summary;
