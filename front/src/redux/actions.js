import axios from "axios";


export const getUser = () => {
  return async function (dispatch) {
    try {
      const user = await axios.get(`/users`);
      dispatch({
        type: "GET_USERS",
        payload: user.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
  
};

export const newUser = (user) => {
  return async function (dispatch) {
    if (!user.name) {
      alert("You must fill in all required fields");
      return;
    }

    try {
      const newUser = await axios.post(`/users`, user);
      dispatch({
        type: "POST_USERS",
        payload: newUser.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const emailPost = (email) => {
  return async function (dispatch) {
    if (!email) {
      alert("You must fill in the field");
      return;
    }

    try {
      const response = await axios.post("/email", { email });
      dispatch({
        type: "POST_EMAIL",
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const adressPost = (adress) => {
  return async function (dispatch) {
    if (!adress) {
      console.error("You must fill in the field");
      return;
    }

    try {
      const newUser = await axios.post(`/adress`, adress);
      dispatch({
        type: "POST_ADRESS",
        payload: newUser.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const allProducts = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/products`);
      dispatch({
        type: "ALL_PRODUCTS",
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const allProductsId = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/products/${id}`);
      dispatch({
        type: "GET_PRODUCTS_DETAIL",
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const allProductsName = (name) => {
  return async function (dispatch) {
    try {
    const {data} = await axios.get(`/products/name/${name}`)
    dispatch({type: "PUT_PRODUCT_BY_NAME", 
    payload: data})
} catch (error) {
  console.error(error);
  }
}
}



export const getProductsByCategory = (category) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/products/category/${category}`);
      console.log("Products by category!!!!!:", response.data);
      dispatch({
        type: "GET_PRODUCTS_BY_CATEGORY",
        payload: response.data,
        
      });
    } catch (error) {
      console.error(error);
      
    }
  };
};

export const postProducts = (product) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/products`, product);
      dispatch({
        type: "POST_PRODUCTS",
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
export const filterPrice= (minimum, maximum) => {
  return { type: 'FILTER_PRODUCTS_PRICE', payload: { minimum, maximum } };
};

export const orderPrice = (order) => {
  return { type: 'ORDER_PRODUCTS_PRICE', payload: order };
};

export const putProductsId = (id, product) => {
	return async function (dispatch) {
	  try {
		const response = await axios.put(`/products/${id}`, product);
		dispatch({
		  type: "PUT_PRODUCTS_ID",
		  payload: response.data,
		});
	  } catch (error) {
		console.error(error);
	  }
	};
  };
  
  export const getFavoriteId = (id) => {
	return async function (dispatch) {
	  try {
		const response = await axios.get(`/getfavorites/${id}`);
		dispatch({
		  type: "GET_FAVORITE_ID",
		  payload: response.data,
		});
	  } catch (error) {
		console.error(error);
	  }
	};
  };
  
  export const postFavoriteId = (id) => {
	return async function (dispatch) {
	  try {
		const response = await axios.post(`/postfavorites/${id}`);
		dispatch({
		  type: "POST_FAVORITE_ID",
		  payload: response.data,
		});
	  } catch (error) {
		console.error(error);
	  }
	};
  };
  export const addToCart = (item) => {
    return {
      type: "ADD_TO_CART",
      payload: item,
    };
  };
  
  export const removeFromCart = (item) => {
    return {
      type: "REMOVE_FROM_CART",
      payload: item,
    };
  };
  
  export const shoppingCart = () => {
	return async function (dispatch) {
	  try {
		const response = await axios.get(`/shoppingCart`);
		dispatch({
		  type: "SHOPPING_CART",
		  payload: response.data,
		});
	  } catch (error) {
		console.error(error);
	  }
	};
  };
  
  export const shoppingCartId = (id) => {
	return async function (dispatch) {
	  try {
		const response = await axios.get(`/shoppingCart/${id}`);
		dispatch({
		  type: "SHOPPING_CART_ID",
		  payload: response.data,
		});
	  } catch (error) {
		console.error(error);
	  }
	};
  };
  
  export const filterByName = (payload) => {
    return {
      type: "FILTER_BY_NAME",
      payload,
    };
  };
  
  export const clean = (payload) => {
    return {
      type: "CLEAN",
      payload,
    };
  };
  export const orderBy = (payload) => {
    return {
      type: "ORDER",
      payload,
    };
  };
  
  // ***** SHOPPING CART  *****

export const addSToShoppingCart = (product) => {
  return function (dispatch) {
    try {
    dispatch({
      type: "ADDTOSHOPPINGCART",
      payload: product,
    });
    } catch (error) {
    console.error(error);
    }
  };
  };

  export const addQuantity = (id)=>{
    return function (dispatch) {
      try {
      dispatch({
        type: "ADDQUANTITY",
        payload: id,
      });
      } catch (error) {
      console.error(error);
      }
    };
  }

  export const RemoveOneFromCart = (id)=>{
    return function (dispatch) {
      try {
      dispatch({
        type: "REMOVEONEFROMCART",
        payload: id,
      });
      } catch (error) {
      console.error(error);
      }
    };
  }


  export const RemoveAllProductFromCart = (id)=>{
    return function (dispatch) {
      try {
      dispatch({
        type: "REMOVEALLPRODUCTFROMCART",
        payload: id,
      });
      } catch (error) {
      console.error(error);
      }
    };
  }
  
  export const clearShoppingCart = () => {
    return function (dispatch) {
      try {
      dispatch({
        type: "CLEARSHOPPINGCART"
      });
      } catch (error) {
      console.error(error);
      }
    };
  }
  