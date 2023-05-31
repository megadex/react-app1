import { event } from "jquery";
import { Link } from "react-router-dom";

const currency = "$";

const ProductCart = (props) => {
  const {id, title, image, quantity, price, subTotal} = props.product;

  const handlePlus = () => {
    const product = {
      ...props.product,
      quantity: quantity + 1,
      subTotal: (price * (quantity + 1)).toFixed(2),
    }
    props.onPlus(product);
  }

  const handleMinus = () => {
    if (quantity <= 1) {
      return;
    }

    const product = {
      ...props.product,
      quantity: quantity - 1,
      subTotal: (price * (quantity - 1)).toFixed(2),
    }
    props.onMinus(product);
  }

  const handleDelete = () => {
    props.onDelete(id);
  }

  return (
    <tr>
      <td className="align-middle">
        <img src={ image } className="mr-2" alt="" style={{ width: "50px" }} />
        <Link className="text-body" to={ `/products/${id}` }>{ title }</Link>
      </td>
      <td className="align-middle">{ currency + price }</td>
      <td className="align-middle">
        <div
          className="input-group quantity mx-auto"
          style={{ width: "100px" }}
        >
          <div className="input-group-btn">
            <button onClick={handleMinus} className="btn btn-sm btn-primary btn-minus">
              <i className="fa fa-minus"></i>
            </button>
          </div>
          <input
            type="text"
            className="form-control form-control-sm bg-secondary border-0 text-center"
            value={ quantity }
            readOnly={true}
          />
          <div className="input-group-btn">
            <button onClick={handlePlus} className="btn btn-sm btn-primary btn-plus">
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </td>
      <td className="align-middle">{ currency + subTotal }</td>
      <td className="align-middle">
        <button onClick={ handleDelete } className="btn btn-sm btn-danger">
          <i className="fa fa-times"></i>
        </button>
      </td>
    </tr>
  );
};

export default ProductCart;
