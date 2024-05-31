import OrderStatusSelector from "../components/OrderStatusSelector";

const PlaygroundPage = () => {
  return <OrderStatusSelector onChange={(value) => console.log(value)} />;
};

export default PlaygroundPage;
