


function Table({ data, config , keyFn}) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td key={keyFn(rowData)} >
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (

    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
      <thead className="bg-primary">
        <tr >{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>

  );
}

export default Table;
