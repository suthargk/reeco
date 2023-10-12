import TableRow from "./TableRow";

const TableBody = ({ rows, columns }) => {
  return (
    <tbody className="bg-white divide-y">
      {rows.map((row, index) => {
        return <TableRow key={index} row={row} columns={columns} />;
      })}
    </tbody>
  );
};

export default TableBody;
