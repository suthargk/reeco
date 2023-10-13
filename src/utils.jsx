export const columns = [
  {
    accessor: "product_name",
    header: "Product Name",
    renderCell: (row) => {
      return (
        <div className="flex items-center gap-2">
          <div className="border border-gray-200 rounded-full overflow-hidden p-0.5">
            <img className="w-7 h-7" src={row.imgSrc} />
          </div>
          <div className="w-96"> {row.product_name}</div>
        </div>
      );
    },
  },
  {
    accessor: "brand",
    header: "Brand",
    renderCell: (row) => {
      return <div>{row.brand}</div>;
    },
  },
  {
    accessor: "price",
    header: "Price",
    renderCell: (row) => {
      return (
        <div>
          <span>${row.price}</span>
          <span className="text-gray-500"> / 6 * 1LB</span>
        </div>
      );
    },
  },
  {
    accessor: "quantity",
    header: "Quantity",
    renderCell: (row) => {
      return (
        <div>
          <span>{row.quantity} </span>
          <span className="text-gray-500">x 6 * 1LB</span>
        </div>
      );
    },
  },
  {
    accessor: "total",
    header: "Total",
    renderCell: (row) => {
      return <div>{row.total}</div>;
    },
  },
  {
    accessor: "status",
    header: "Status",
    renderCell: (row) => {
      let statusClassName;
      switch (row.status) {
        case "Approved": {
          statusClassName = "bg-green-200 text-green-900";
          break;
        }
        case "Missing": {
          statusClassName = "bg-orange-200 text-orange-900";
          break;
        }

        case "Missing urgent": {
          statusClassName = "bg-red-200 text-red-900";
          break;
        }

        default: {
          statusClassName = "bg-blue-200 text-blue-900";
        }
      }

      return (
        <div
          className={`${statusClassName} flex justify-center px-2 py-0.5 text-xs rounded-full w-max`}
        >
          {row.status}
        </div>
      );
    },
  },
];

export const tableData = [
  {
    id: 1,
    product_name:
      "Chicken Breast Fillets, Boneless matuu ma Marinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: 60.67,
    quantity: 1,
    total: 60.67,
    status: "Approved",
    imgSrc: "/assets/avocado.jpg",
  },
  {
    id: 2,
    product_name:
      "Chicken Breast Fillets, Boneless matuu ma Marinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: 60.67,
    quantity: 3,
    total: 182.01,
    status: "Missing",
    imgSrc: "/assets/avocado.jpg",
  },
  {
    id: 3,
    product_name:
      "Chicken Breast Fillets, Boneless matuu ma Marinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: 60.67,
    quantity: 2,
    total: 121.34,
    status: "Missing",
    imgSrc: "/assets/avocado.jpg",
  },
  {
    id: 4,
    product_name:
      "Chicken Breast Fillets, Boneless matuu ma Marinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: 60.67,
    quantity: 5,
    total: 303.35,
    status: "Approved",
    imgSrc: "/assets/avocado.jpg",
  },
  {
    id: 5,
    product_name:
      "Chicken Breast Fillets, Boneless matuu ma Marinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: 60.67,
    quantity: 1,
    total: 60.67,
    status: "Approved",
    imgSrc: "/assets/avocado.jpg",
  },
  {
    id: 6,
    product_name:
      "Chicken Breast Fillets, Boneless matuu ma Marinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: 40.34,
    quantity: 2,
    total: 80.68,
    status: "Missing",
    imgSrc: "/assets/avocado.jpg",
  },
  {
    id: 7,
    product_name:
      "Chicken Breast Fillets, Boneless matuu ma Marinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: 101.23,
    quantity: 3,
    total: 303.69,
    status: "Missing",
    imgSrc: "/assets/avocado.jpg",
  },
  {
    id: 8,
    product_name:
      "Chicken Breast Fillets, Boneless matuu ma Marinated 6 Ounce Raw, Invivid",
    brand: "Hormel Black Labelmany",
    price: 114.23,
    quantity: 1,
    total: 114.23,
    status: "Missing",
    imgSrc: "/assets/avocado.jpg",
  },
];
