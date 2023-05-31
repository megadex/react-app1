export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_CATEGORY = "SET_CATEGORY";

export const setCategories = (data) => ({
  type: SET_CATEGORIES,
  payload: data,
});

export const setCategory = (data) => ({
  type: SET_CATEGORY,
  payload: data,
});
