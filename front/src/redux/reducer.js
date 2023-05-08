const initialState = {
  users: [],
  products: [],
  favorite: [],
  shoppingCart: [],
 category: [],
 clean:[],
 detail:[],
 cartItems: [],
 priceOrder: '',
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
          products: Array.isArray(action.payload) ? action.payload : [],
        };
      
    case "GET_PRODUCTS_DETAIL":
      return {
        ...state,
        products: action.payload,
      };
      case "PUT_PRODUCT_BY_NAME":
          
      return {...state, products: action.payload}
     
          case "GET_PRODUCTS_BY_CATEGORY":
            return {
              ...state,
              category: action.payload
            }
          
      
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

    case "CLEAN":
    return {
      ...state,
      products: [],
    };
    
    /*case "ORDER":
      let orderPrice = [...state.products];
      if (action.payload === "1_100") {
        orderPrice.sort((a, b) => a.price - b.price);
      } else if (action.payload === "100_1") {
        orderPrice.sort((a, b) => b.price - a.price);
      }
      return { ...state, products: orderPrice };
      case 'FILTRAR_PRODUCTOS_PRECIO':
      return {
        ...state,
        products: state.products.filter(product => {
          return product.price >= action.payload.minimum && product.price <= action.payload.maximum;
        })
      };*/
      case  'FILTER_PRODUCTS_PRICE':
      return {
        ...state,
        products: state.products.filter(product => {
          return product.price >= action.payload.minimum && product.price <= action.payload.maximum;
        })
      };
      case 'ORDER_PRODUCTS_PRICE':
  const order = action.payload === 'Lowest to highest' ? 'ASC' : 'DESC';
  return {
    ...state,
    products: [...state.products].sort((a, b) => {
      if (order === 'ASC') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    })
  };



 // ***** SHOPPING CART  *****

    // Añadir al carrito
    case "ADDTOSHOPPINGCART":
      let iteminCart = state.shoppingCart.find(item => item.id === action.payload.id)
      return iteminCart?  
      {
        ...state,
        shoppingCart: state.shoppingCart
      }:
      {
        ...state,
        shoppingCart:[...state.shoppingCart, {...action.payload, quantity:1}],
      }

    // Sumar 1 al carrito
    case "ADDQUANTITY":
    return {
      ...state, 
      shoppingCart : state.shoppingCart.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1} : item )
    }
    
    // Quitar una unidad de un producto del carrito
    case "REMOVEONEFROMCART":
    let itemToDelete = state.shoppingCart.find(item => item.id === action.payload)
    return itemToDelete.quantity > 1 ? {
      ...state,
      shoppingCart: state.shoppingCart.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1}: item)
      }
      :
      {
        ...state,
        shoppingCart: state.shoppingCart.filter(item => item.id !== action.payload)
      }

    // Quitar todo un producto del carrito
    case "REMOVEALLPRODUCTFROMCART":
      return {
        ...state,
        shoppingCart : state.shoppingCart.filter(item => item.id !== action.payload)
      }
    
    // Vaciar carrito
    case "CLEARSHOPPINGCART":
      return {
        ...state,
        shoppingCart: [],
      };

    default:
    return state;
  }
  }
export default rootReducer;
  