import { act } from "react";

export const counterReducer = (state, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "increment":
      if (state.count <= -1) {
        return {
          count: state.count + 1,
          color: "red",
        };
      } else {
        return {
          count: state.count + 1,
        };
      }

    case "decrement":
      if (state.count <= 1) {
        return {
          count: state.count - 1,
          color: "red",
        };
      } else {
        return {
          count: state.count - 1,
        };
      }
    case "reset":
      return {
        count: (state.count = 0),
        color: "red",
      };
    case "increment_by":
      if (state.count < -10) {
        return {
          count: state.count + action.payload,
          color: "red",
        };
      } else {
        return {
          count: state.count + action.payload,
        };
      }
    case "decrement_by":
      if (state.count <= 4) {
        return {
          count: state.count - action.payload,
          color: "red",
        };
      } else {
        return {
          count: state.count - action.payload,
        };
      }

    default:
      return state;
  }
};
