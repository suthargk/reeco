import OptionIcon from "../../public/assets/icons/OptionIcon";
import CheckIcon from "../../public/assets/icons/CheckIcon";
import XIcon from "../../public/assets/icons/XIcon";
import EditIcon from "../../public/assets/icons/EditIcon";

const ActionButton = ({
  handleActionButtonOverlayOption,
  isOpen,
  rowId,
  handleApprovedProduct,
  handleEdit,
  handleMissingOverlay,
}) => {
  return (
    <td className="p-3 text-gray-800 text-sm pl-4">
      <button
        className={`hover:bg-gray-100 rounded-md relative  ${
          isOpen ? "bg-gray-100" : ""
        }`}
        onClick={() => handleActionButtonOverlayOption(rowId)}
      >
        <OptionIcon className="text-gray-500" width={24} height={24} />
        {isOpen && (
          <div className=" absolute top-5 w-max right-2 overflow-hidden bg-white z-20  shadow-lg  rounded-md border border-gray-200 divide-y">
            <button
              onClick={() => handleApprovedProduct(rowId)}
              className="w-full p-2 hover:bg-gray-100 duration-300 flex gap-2 items-center"
            >
              <CheckIcon width={18} height={18} />
              <span>Mark approved</span>
            </button>
            <button
              onClick={handleMissingOverlay}
              className="p-2 w-full hover:bg-gray-100 duration-300 flex gap-2 items-center"
            >
              <XIcon width={18} height={18} />
              <span>Mark missing</span>
            </button>
            <button
              onClick={handleEdit}
              className="p-2 w-full hover:bg-gray-100 duration-300 flex gap-2 items-center"
            >
              <EditIcon width={18} height={18} />
              <span>Edit Product</span>
            </button>
          </div>
        )}
      </button>
      {isOpen && (
        <div
          onClick={handleActionButtonOverlayOption}
          className="fixed left-0 top-0 right-0 bottom-0 bg-slate-50 opacity-5 z-10"
        ></div>
      )}
    </td>
  );
};

export default ActionButton;
