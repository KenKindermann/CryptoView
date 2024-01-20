const TableRow = ({ data }) => {
  const formattedData = {
    current_price: new Intl.NumberFormat("de-DE", { style: "currency", currency: "USD" }).format(data?.current_price),
    price_change_percentage_24h: `${data?.price_change_percentage_24h.toFixed(2)}%`,
    market_cap: new Intl.NumberFormat("de-DE").format(data?.market_cap),
  };
  return (
    <tr>
      <td>
        <img src={data?.image} alt={`${data.name}icon`} />
        {data.name}
      </td>
      <td>{formattedData.current_price}</td>
      <td className={data.price_change_percentage_24h > 0 ? `profit` : `loss`}>
        {formattedData.price_change_percentage_24h}
      </td>
      <td>{formattedData.market_cap}</td>
    </tr>
  );
};

export default TableRow;
