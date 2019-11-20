import { AddFeature, RemoveFeature } from "../actions/actions";

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const carReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AddFeature:
      console.log("AddFeature");
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, payload]
        },
        additionalPrice: state.additionalPrice + payload.price
      };
    case RemoveFeature:
      console.log("RemoveFeature");
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(each => each.id !== payload.id)
        },
        additionalPrice: state.additionalPrice - payload.price
      };
    default:
      return state;
  }
};
