import { connect } from "react-redux";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import { useEffect, useState } from "react";
import { ADD_TABLE_DATA } from "../../store/action";

const Table = ({ columns, tableData, dispatch }) => {
  const [isTableLoading, setIsTableLoading] = useState(true);

  useEffect(() => {
    fetch("/list")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ADD_TABLE_DATA, payload: data.list });
      })
      .finally(() => setIsTableLoading(false));
  }, []);

  return (
    <div className="bg-gray-50 rounded-md border border-gray-200 overflow-x-auto overflow-y-hidden">
      <table
        className="relative"
        style={{ minWidth: "1200px", height: "500px" }}
      >
        <TableHeader columns={columns} />
        <TableBody
          rows={tableData}
          columns={columns}
          isTableLoading={isTableLoading}
        />
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tableData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
