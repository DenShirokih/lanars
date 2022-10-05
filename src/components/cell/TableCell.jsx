import React from "react";

import "./TableCell.css";

const TableCell = ({ index, data, onClick, loading }) => {
  return (
    <>
      {data && (
        <div
          className={data.done ? "cell active" : "cell"}
          style={{ width: 80, height: 104 }}
          onClick={loading ? (f) => f : () => onClick(index)}
        >
          <p>{data.open ? data.content : ""}</p>
        </div>
      )}
    </>
  );
};

export default TableCell;
