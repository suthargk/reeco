import TableRow from "./TableRow";
import SpinnerIcon from "../../../public/assets/icons/SpinnerIcon";

const TableBody = ({ rows, columns, isTableLoading }) => {
  if (isTableLoading)
    return (
      <div
        style={{ width: "100%", height: "100%" }}
        className="absolute z-50 flex justify-center items-center bg-white"
      >
        <SpinnerIcon className="animate-spin" width={24} height={24} />
      </div>
    );

  return (
    <tbody className="bg-white divide-y">
      {rows.map((row, index) => {
        return (
          <TableRow
            key={row.id}
            index={index}
            row={row}
            columns={columns}
            rowsLength={rows.length}
          />
        );
      })}
    </tbody>
  );
};

export default TableBody;
