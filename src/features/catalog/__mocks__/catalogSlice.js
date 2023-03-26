const initialState = {
  ids: [],
  entities: {},
  productsLoaded: false,
  filtersLoaded: false,
  status: "idle",
  brands: [],
  types: [],
  productParams: {},
  metaData: null,
};

const reducer = (state = initialState) => state;

export default {
  reducer,
};
