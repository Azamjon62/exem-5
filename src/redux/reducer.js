const INITIAL__STATE = {
  post: [],
  load: true,
  errorMessage: "",
  postItem: null,
  loadItem: true,
  data: [],
  allCategories: [],
  itemCategory: null,
  addBasket: [],
};

export const reducer = (state = INITIAL__STATE, action) => {
  switch (action.type) {
    case "GET_ALL":
      return { ...state, post: action.payload };
    case "LOAD":
      return { ...state, load: false };
    case "ERROR":
      return { ...state, errorMessage: action.payload };
    case "ITEM":
      return { ...state, postItem: action.payload };
    case "LOAD_ITEM":
      return { ...state, loadItem: false };
    case "ALL_CATE":
      return { ...state, allCategories: action.payload };
    case "ITEM_CATE":
      return { ...state, itemCategory: action.payload };
    case "ADD_BASKET":
      return { ...state, addBasket: [...state.addBasket, action.payload] };
    case "REMOVE_ITEM":
      return { ...state, addBasket: state.addBasket.filter((item) => item.id !== action.payload) }
    default:
      return state;
  }
};
