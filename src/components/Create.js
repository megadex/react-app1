import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';

import api from '../api';

const Create = (props) => {

  const handleSave = () => {
    api
      .create(props.newProduct)
      .then(json => {
        props.onCreate(json);
      })
      .catch(err => {
        console.log(err);
      });

    props.history.push('/');
  }

  if (props.addingProduct) {
    return (
      <div className="wrapper">
        <h1>Create View</h1>

        <form className="editfields">
          <div className="form-group">
            <label>id:</label>
            <span>ID</span>
          </div>

          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={props.newProduct.title}
              placeholder="title"
              onChange={(e) => props.onChangeCreate(e)}/>
          </div>

          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              min="0"
              name="price"
              placeholder="price"
              value={props.newProduct.price}
              onChange={(e) => props.onChangeCreate(e)}/>
          </div>

          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={props.newProduct.description}
              placeholder="description"
              onChange={(e) => props.onChangeCreate(e)}/>
          </div>

          <button 
            type="button" 
            className="mr-1" 
            onClick={props.onCancelCreate}>Cancel</button>

          <button 
            type="button" 
            onClick={handleSave}>Save</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <h1>Create View</h1>
        
        <div className="row">
          <button 
            className="wrapper"
            type="button" 
            onClick={props.addMode}>Create</button>
        </div>
      </div>
    );
  }
};

let mapStateToProps = (state) => {
  return {
    products: state.main.products,
    addingProduct: state.main.addingProduct,
    newProduct: state.main.newProduct
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onCancelCreate: () => dispatch(actions.main.cancelCreate()),
    onCreate: (is) => dispatch(actions.main.create(is)),
    onChangeCreate: (e) => dispatch(actions.main.changeCreate(e)),
    addMode: () => dispatch(actions.main.addMode())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);