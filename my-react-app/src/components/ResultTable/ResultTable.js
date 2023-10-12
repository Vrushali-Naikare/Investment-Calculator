import styles from "./ResultTable.module.css";

const Table = (props) => {
  return (
    <div>
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>YEAR NUMBER</td>
            <td>TOTAL SAVINGS END OF YEAR</td>
            <td>INTEREST GAINED IN YEAR</td>
            <td>TOTAL INTEREST GAINED</td>
            <td>TOTAL INVESTED CAPITAL</td>
          </tr> */}

          {props.data.map((item) => {
            const formatter = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "INR",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });

            return (
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.savingsEndOfYear)}</td>
                <td>{formatter.format(item.yearlyInterest)}</td>
                <td>
                  {formatter.format(
                    item.savingsEndOfYear -
                      props.initialInvestment -
                      item.yearlyContribution * item.year
                  )}
                </td>
                <td>
                  {formatter.format(
                    props.initialInvestment +
                      item.yearlyContribution * item.year
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
