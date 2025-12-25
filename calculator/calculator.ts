type investmentData = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

type investmentResult = {
  year: string;
  totalAmount: number;
  totalContributions: number;
  totalInterestEarned: number;
};

type calculationResult = investmentResult[] | string;

const calculateInvestment = (data: investmentData): calculationResult => {
  const { initialAmount, annualContribution, expectedReturn, duration } = data;

  if (initialAmount < 0) return "initial amount must be at least zero.";

  if (duration <= 0) return "no valid amount of years provided.";

  if (expectedReturn < 0) return "expected return must be at least zero.";

  let total = initialAmount;
  let totalContributions = 0;
  let totalInterestEarned = 0;

  const annualResults: investmentResult[] = [];

  for (let i = 0; i < duration; i++) {
    total = total * (1 + expectedReturn);
    totalInterestEarned = total - totalContributions - initialAmount;
    totalContributions += annualContribution;
    total += annualContribution;

    annualResults.push({
      year: `Year ${1 + i}`,
      totalAmount: total,
      totalInterestEarned,
      totalContributions,
    });
  }

  return annualResults;
};

const printResults = (results: calculationResult) => {
  if (typeof results === "string") {
    console.log(results);
    return;
  }

  results.map((yearEndResults) => {
    console.log(yearEndResults.year);
    console.log(`Total: ${yearEndResults.totalAmount.toFixed(0)}`);
    console.log(
      `Total Contributions: ${yearEndResults.totalContributions.toFixed(0)}`
    );
    console.log(
      `Total Interest Earned: ${yearEndResults.totalInterestEarned.toFixed(0)}`
    );
    console.log("-------------------------------------");
  });
};

const investmentData: investmentData = {
  initialAmount: 5000,
  annualContribution: 500,
  expectedReturn: 0.08,
  duration: 10,
};

const results = calculateInvestment(investmentData);

printResults(results);
