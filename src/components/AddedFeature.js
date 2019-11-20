import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/actions";

const AddedFeature = props => {
  const { removeFeature } = props;
  return (
    <li>
      <button className="button" onClick={() => removeFeature(props.feature)}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => (
  console.log("total:", state), { car: state.car }
); //need this for the export to work.

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
