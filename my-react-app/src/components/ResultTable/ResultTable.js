const ResultTable = (props) => {
    return(
        <table className ="result">
            <thead>
                <tr>
                    <th> Year</th>
                    <th>Total Saving</th>
                    <th>Interest (Year) </th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>YEAR NUMBER</td>
                    <td>TOTAL SAVINGS END OF YEAR</td>
                    <td>INTEREST GAINED IN YEAR</td>
                    <td>TOTAL INTERST GAINED</td>
                    <td>TOTAL INVESTED CAPITAL</td>
                </tr>
                {props.data.map((item) => {
            const formatter = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "Rs",
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
    );
};
export default ResultTable;