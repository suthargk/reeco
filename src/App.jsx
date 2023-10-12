import Table from "./components/Table";
import { columns } from "./utils";

function App() {
  return (
    <div className="flex justify-center items-center lg:mt-20 ">
      <Table columns={columns} />
    </div>
  );
}

export default App;
