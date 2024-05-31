import { Toaster } from "react-hot-toast";
import SearchBox from "../components/SearchBox";
import ToastDemo from "../components/ToastDemo";
import OrderStatusSelector from "../components/OrderStatusSelector";

const PlaygroundPage = () => {
  return <OrderStatusSelector onChange={(value) => console.log(value)} />;
};

export default PlaygroundPage;
