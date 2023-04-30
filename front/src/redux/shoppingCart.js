/*import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Creamos una acción asincrónica para obtener los productos del servidor
export const fetchProducts = createAsyncThunk('cart/fetchProducts', async () => {
  const response = await axios.get('/api/products');
  return response.data;
});

// Creamos una acción asincrónica para agregar un producto al carrito
export const addToCart = createAsyncThunk('cart/addToCart', async (product) => {
  const response = await axios.post('/api/cart', product);
  return response.data;
});

// Creamos el slice del carrito
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // Creamos una acción sincrona para remover un producto del carrito
    removeFromCart(state, action) {
      const productId = action.payload;
      state.products = state.products.filter((product) => product.id !== productId);
    },
  },
  extraReducers: (builder) => {
    builder
      // Manejamos la acción de obtener productos
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Manejamos la acción de agregar al carrito
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
// eslint-disable-next-line no-unused-vars
function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }*/
  /*La ventaja de devolver una función en lugar de un objeto de acción es que esta función se ejecuta de forma asíncrona, lo que significa que no bloquea la ejecución del código en el hilo principal. Esto permite que el resto del código de la acción se ejecute sin tener que esperar a que se complete la operación asincrónica. Además, como la función que se devuelve se ejecuta de forma separada del resto del código de la acción, esto hace que sea más fácil de manejar y mantener el código.*/