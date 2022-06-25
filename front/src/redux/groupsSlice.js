import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeTabGroupsTitle: "",
  recommendationGroups: [],
  nearbyGroups: [],
  personNearGroups: [],
  timeNearGroups: [],
};

export const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    setHomeTabGroupsTitle: (state, action) => {
      return { ...state, homeTabGroupsTitle: action.payload };
    },
    setRecommendation: (state, action) => {
      return { ...state, recommendationGroups: action.payload };
    },
    setNearby: (state, action) => {
      return { ...state, nearbyGroups: action.payload };
    },
    setPersonNear: (state, action) => {
      return { ...state, personNearGroups: action.payload };
    },
    setTimeNear: (state, action) => {
      return { ...state, timeNearGroups: action.payload };
    },
    init: (state, action) => {
      return initialState;
    },
  },
});

export const {
  setHomeTabGroupsTitle,
  setRecommendation,
  setNearby,
  setPersonNear,
  setTimeNear,
  init,
} = groupsSlice.actions;

export default groupsSlice.reducer;