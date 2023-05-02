const initialState = {
    users: [],
    products: [],
    favorite: [],
    shoppingCart: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_USERS":
        return {    
          ...state,
          users: action.payload,
        };
      case "POST_USERS":
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      case "POST_EMAIL":
        return {
          ...state,
          email: action.payload,
        };
      case "POST_ADRESS":
        return {
          ...state,
          adress: action.payload,
        };
      case "ALL_PRODUCTS":
        return {
          ...state,
          products: action.payload,
        };
      case "GET_PRODUCTS_DETAIL":
        return {
          ...state,
          products: action.payload,
        };
      case "GET_PRODUCTS_NAME":
        return {
          ...state,
          products: action.payload,
        };
      case "GET_PRODUCTS_BY_CATEGORY":
        return {
          ...state,
          products: action.payload,
        };
      case "POST_PRODUCTS":
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      case "PUT_PRODUCTS_ID":
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id ? action.payload : product
          ),
        };
      case "GET_FAVORITE_ID":
        return {
          ...state,
          favorite: action.payload,
        };
      case "POST_FAVORITE_ID":
        return {
          ...state,
          favorite: [...state.favorite, action.payload],
        };
      case "SHOPPING_CART":
        return {
          ...state,
          shoppingCart: action.payload,
        };
      case "SHOPPING_CART_ID":
        return {
          ...state,
          shoppingCart: action.payload,
        };
        
        case "FILTER_BY_NAME":
      const filterName = state.products;
      const aux2 =
        action.payload === "All Products"
          ? filterName
          : filterName.filter((e) =>
              e.products?.includes(action.payload) ? e : null
            );
      return {
        ...state,
        products: aux2,
      };


      default:
        return state;
    }
  };
  export default rootReducer;
    