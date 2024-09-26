import CardComponent from "../CardComponent";

const ListCardComponent = () => {
  return (
    <>
      {chunk.map((item, itemIndex) => (
        <CardComponent />
      ))}
    </>
  );
};
export default ListCardComponent;
