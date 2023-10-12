const TableHeader = ({ columns }) => {
  return (
    <thead>
      <tr className="border-b border-gray-200 ">
        {columns.map((column) => {
          return (
            <th
              className="text-left p-1.5 pl-4 text-sm font-medium"
              key={column.accessor}
            >
              {column.header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
