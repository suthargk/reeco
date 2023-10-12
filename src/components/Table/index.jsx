import { connect } from "react-redux";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ columns, tableData }) => {
  return (
    <div className="bg-gray-50 rounded-md overflow-auto border border-gray-200">
      <table style={{ minWidth: "1200px" }}>
        <TableHeader columns={columns} />
        <TableBody rows={tableData} columns={columns} />
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tableData: state,
  };
};

export default connect(mapStateToProps, null)(Table);
