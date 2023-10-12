import XIcon from "../../public/assets/icons/XIcon";

const MissingOverlay = ({
  productName,
  handleMissingOverlay,
  handleMissingProduct,
  rowId,
}) => {
  return (
    <div className="p-4 flex items-start">
      <div>
        <h1 className="font-semibold mb-4">Missing Product</h1>
        <p className="text-gray-700">
          <span className="text-black">'Is </span>
          {productName.slice(0, 40) + "..."}
          <span className="text-black"> 'urgent?</span>
        </p>

        <div className="flex gap-8 justify-end mt-10 font-medium">
          <button onClick={() => handleMissingProduct(rowId, false)}>No</button>
          <button onClick={() => handleMissingProduct(rowId, true)}>Yes</button>
        </div>
      </div>

      <button onClick={handleMissingOverlay} className="text-gray-700">
        <XIcon width={20} height={20} />
      </button>
    </div>
  );
};

export default MissingOverlay;
