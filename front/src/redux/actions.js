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
        type: "GET_PRODUCTS_ID",
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
      const response = await axios.get(`/products/${name}`);
      dispatch({
        type: "GET_PRODUCTS_NAME",
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getProductsByCategory = (category) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/products/category/${category}`);
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
  
  
  