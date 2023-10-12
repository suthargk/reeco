import { useState } from "react";
import ActionButton from "../ActionButton";
import { connect } from "react-redux";
import {
  APPROVED_PRODUCT,
  MISSING_PRODUCT,
  UPDATE_PRODUCT,
} from "../../store/action";
import { createPortal } from "react-dom";
import EditOverlay from "../EditOverlay";
import MissingOverlay from "../MissingOverlay";

const TableRow = ({ row, columns, dispatch, index, rowsLength }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isMissingOverlayOpen, setIsMissingOverlayOpen] = useState(false);
  const handleActionButtonOverlayOption = () => {
    setIsOpen(!isOpen);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleMissingOverlay = () => {
    setIsMissingOverlayOpen(!isMissingOverlayOpen);
  };

  const handleApprovedProduct = (rowId) => {
    dispatch({
      type: APPROVED_PRODUCT,
      payload: {
        productId: rowId,
      },
    });
  };

  const handleMissingProduct = (rowId, value) => {
    dispatch({
      type: MISSING_PRODUCT,
      payload: {
        productId: rowId,
        isMissingUrgent: value,
      },
    });
    setIsMissingOverlayOpen(false);
  };

  const handleUpdateProduct = (rowId, price, quantity) => {
    dispatch({
      type: UPDATE_PRODUCT,
      payload: {
        productId: rowId,
        price,
        quantity,
      },
    });
  };

  return (
    <tr>
      {columns.map((column) => {
        return (
          <td className="p-3 text-gray-800 text-sm pl-4" key={column.accessor}>
            {column.renderCell(row)}
          </td>
        );
      })}
      <ActionButton
        isOpen={isOpen}
        rowId={row.id}
        index={index}
        rowsLength={rowsLength}
        handleActionButtonOverlayOption={handleActionButtonOverlayOption}
        handleApprovedProduct={handleApprovedProduct}
        handleEdit={handleEdit}
        handleMissingOverlay={handleMissingOverlay}
      />

      {isMissingOverlayOpen &&
        createPortal(
          <div
            className="fixed top-0 left-0 bottom-0 right-0"
            style={{ background: "rgba(0,0,0,0.4)" }}
            onClick={handleMissingOverlay}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl bg-white rounded-lg"
            >
              <MissingOverlay
                productName={row.product_name}
                handleMissingOverlay={handleMissingOverlay}
                handleMissingProduct={handleMissingProduct}
                rowId={row.id}
              />
            </div>
          </div>,
          document.body
        )}

      {isEdit &&
        createPortal(
          <div
            style={{ background: "rgba(0,0,0,0.4)" }}
            onClick={handleEdit}
            className="fixed top-0 left-0 bottom-0 right-0"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl bg-white rounded-lg"
            >
              <EditOverlay
                row={row}
                handleEdit={handleEdit}
                handleUpdateProduct={handleUpdateProduct}
              />
            </div>
          </div>,
          document.body
        )}
    </tr>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(null, mapDispatchToProps)(TableRow);
