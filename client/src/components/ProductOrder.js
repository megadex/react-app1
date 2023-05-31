const ProductOrder = (props) => {
  const {title, image, category, date, color, size,
        price, quantity, subTotal} = props.product;
  const d = new Date(date);
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  return (
    <tr>
      <td className="align-middle">
        <img src={ image } className="mr-2" alt="" style={{ width: "50px" }} />
        { title }
      </td>
      <td className="align-middle">{ category.id }</td>
      <td className="align-middle">{ day +"/"+ month +"/"+ year +" "+ hours +":"+ minutes +":"+ seconds }</td>
      <td className="align-middle">{ color }</td>
      <td className="align-middle">{ size }</td>
      <td className="align-middle">{ price }</td>
      <td className="align-middle">{ quantity }</td>
      <td className="align-middle">{ subTotal }</td>
    </tr>
  );
};

export default ProductOrder;
