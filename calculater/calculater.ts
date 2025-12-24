type data = {
  initialAmount: number;
  annualContribution: number;
  expectedReturn: number;
  duration: number;
};

let data: data = {
  investment: 22,
};

const calculateInvestment = (data: data) => {
  const results = [data.investment];
  return results;
};

const results = calculateInvestment(data);

const printResults = (results: number[]) => {
  console.log(results);
};

printResults(results);
