import { useState } from "react";
import Input from "./Input";

const EditOverlay = ({ row, handleEdit, handleUpdateProduct }) => {
  const { product_name, brand, price, quantity, imgSrc } = row;
  const [productPrice, setProductPrice] = useState(price);
  const [productQuantity, setProductQuantity] = useState(quantity);

  const handleIncrement = () => {
    setProductQuantity(productQuantity + 1);
  };

  const handleDecrement = () => {
    if (productQuantity < 1) return;
    setProductQuantity(productQuantity - 1);
  };

  const handleProductPrice = (e) => {
    if (e.target.value < 0 || isNaN(e.target.value)) {
      setProductPrice(0);
      return;
    }
    setProductPrice(+e.target.value);
  };

  const handleProductQuantity = (e) => {
    if (e.target.value < 0 || isNaN(e.target.value)) {
      setProductQuantity(0);
      return;
    }
    setProductQuantity(+e.target.value);
  };
  return (
    <div className="p-4 w-80 space-y-2">
      <div>
        <h3 className="text-gray-800 font-medium">
          {product_name.slice(0, 50) + "..."}{" "}
        </h3>
        <p className="text-gray-500">{brand}</p>
      </div>

      <div className="h-36 w-36 mx-auto">
        <img className="" src={imgSrc} />
      </div>

      <div className=" rounded-md overflow-hidden p-4 flex-grow flex flex-col items-end gap-2">
        <Input
          label="Price ($)"
          unit="/ 6 * 1LB"
          inputValue={productPrice}
          handleChange={handleProductPrice}
        />
        <Input
          label="Quantity"
          unit="x 6 * 1LB"
          actionButton
          inputValue={productQuantity}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          handleChange={handleProductQuantity}
        />
        <h4 className="flex w-full justify-between mt-2">
          <span className="font-medium text-base">Total</span>
          <span className="mr-24 font-bold">
            ${(productQuantity * productPrice).toFixed(2)}
          </span>
        </h4>
      </div>

      <div className="flex justify-end gap-3 mt-4  text-sm">
        <button
          className="text-blue-900 py-1.5 px-4 rounded-lg"
          onClick={handleEdit}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            handleUpdateProduct(row.id, productPrice, productQuantity);
            handleEdit(false);
          }}
          className="text-white bg-blue-600 py-1.5 px-4 rounded-lg duration-300 hover:bg-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default EditOverlay;
