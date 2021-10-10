import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from './../store/actions';

import api from './../api';

const Edit = (props) => {

  const handleSave = () => {
    api
      .update(props.selectedProduct)
      .then(() => {
        props.onUpdate();
      })
      .catch(err => {
        console.log(err);
      });

    props.history.push('/');
  }

  if (props.selectedProduct.id) {
    return (
      <div className="wrapper">
        <h1>Edit View</h1>

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
              value={props.selectedProduct.title}
              placeholder="title"
              onChange={(e) => props.onChange(e)}/>
          </div>

          <div className="form-group">
            <label>Price:</label>
            <input
              type="number"
              min="0"
              name="price"
              placeholder="price"
              value={props.selectedProduct.price}
              onChange={(e) => props.onChange(e)}/>
          </div>

          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={props.selectedProduct.description}
              placeholder="description"
              onChange={(e) => props.onChange(e)}/>
          </div>

          <button 
            className="mr-1"
            type="button"
            onClick={props.onCancel}>Cancel</button>

          <button 
            type="button" 
            onClick={handleSave}>Save</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <h1>Edit View</h1>
        
        <div className="row">
          <Link to="/">To Main View</Link>
        </div>
      </div>);
  }
};

let mapStateToProps = (state) => {
  return {
    selectedProduct: state.main.selectedProduct
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    onCancel: () => dispatch(actions.main.cancel()),
    onUpdate: () => dispatch(actions.main.update()),
    onChange: (e) => dispatch(actions.main.change(e))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);