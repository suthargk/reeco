import MinusIcon from "../../public/assets/icons/MinusIcon";
import PlusIcon from "../../public/assets/icons/PlusIcon";

const Input = ({
  label,
  actionButton,
  unit,
  inputValue,
  handleIncrement = () => {},
  handleDecrement = () => {},
  handleChange = () => {},
}) => {
  return (
    <label className="w-full flex items-center justify-between">
      <span>{label}</span>
      <div className="flex items-center gap-2">
        {actionButton ? (
          <button
            onClick={handleDecrement}
            className={`text-white bg-blue-500 h-5 w-5 rounded-full flex justify-center items-center duration-300  ${
              inputValue < 1
                ? "cursor-not-allowed bg-blue-200"
                : "hover:bg-blue-400"
            }`}
          >
            <MinusIcon width={16} height={16} />
          </button>
        ) : (
          <div className="h-6 w-6"></div>
        )}
        <input
          style={{ marginLeft: !actionButton ? "-11.6rem" : "" }}
          type="text"
          value={inputValue}
          onChange={handleChange}
          className={`border border-gray-200 px-2 py-1 rounded-lg w-16`}
        />
        {actionButton ? (
          <button
            onClick={handleIncrement}
            className="bg-blue-500 text-white h-5 w-5 rounded-full flex justify-center items-center duration-300 hover:bg-blue-400"
          >
            <PlusIcon width={16} height={16} />
          </button>
        ) : (
          <div className="text-xs text-gray-500">{unit}</div>
        )}
      </div>
      {actionButton && <div className="text-xs text-gray-500">{unit}</div>}
    </label>
  );
};

export default Input;
