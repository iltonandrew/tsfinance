import axios from "axios";

export async function getTicker(ticker: string) {
  const url = `https://query2.finance.yahoo.com/v8/finance/chart/${ticker}`;
  const response = await axios.get(url);
  console.log(response.data.chart.result);
}
