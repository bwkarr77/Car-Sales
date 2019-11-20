import React from "react";
import { connect } from "react-redux";

const Total = ({ carPrice, additionalPrice }) => {
  return (
    <div className="content">
      <h4>Total Amount: ${carPrice + additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => (
  console.log("total:", state),
  { carPrice: state.car.price, additionalPrice: state.additionalPrice }
); //need this for the export to work.

export default connect(mapStateToProps, {})(Total);
