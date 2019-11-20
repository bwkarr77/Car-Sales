import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";

const AdditionalFeatures = ({ additionalFeatures }) => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => (
  console.log("additionalfeatures:", state),
  { additionalFeatures: state.additionalFeatures }
); //need this for the export to work.

export default connect(mapStateToProps, {})(AdditionalFeatures);
