export const AddFeature = "AddFeature";
export const RemoveFeature = "RemoveFeature";

export const addFeature = feature => ({
  type: AddFeature,
  payload: feature
});

export const removeFeature = feature => ({
  type: RemoveFeature,
  payload: feature
});
