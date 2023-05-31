import React from "react";

const Sorting = () => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className="btn btn-sm btn-light dropdown-toggle"
        data-toggle="dropdown"
      >
        Sorting
      </button>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="/">
          Price: ascending
        </a>
        <a className="dropdown-item" href="/">
          Price: descending
        </a>
        <a className="dropdown-item" href="/">
          Best rating
        </a>
      </div>
    </div>
  );
};

export default Sorting;
