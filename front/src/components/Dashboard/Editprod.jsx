import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./Editprod.module.css";
import { putProductsId } from '../../redux/actions';

const EditProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [form, setForm] = useState({
    name: '',
    image: '',
    price: '',
    colors: '',
    sizes: '',
    category: '',
    description: '',
    stock: '',
    deleted: false,
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data);
        setForm(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  //  alert("Deleted")
    try {
      await axios.put(`/products/${id}`, form);
      dispatch(putProductsId(id, form));
      toast.success('Successfully modified product');
      setTimeout(() =>{
        window.location.href = "/admin";

      },2000)
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) {
    return <div>Cargando...</div>;
  }
  const handleDelete = () => {
    setForm({ ...form, deleted: !form.deleted });
    
  }
  
  return (
    <div className={styles.container}>
         <Link to="/home">
           <button className={styles.landingButtonn}>Henry Market</button>
         </Link>
       <h2>Edit Product</h2>
       <form onSubmit={handleSubmit}>
         <label className={styles.label}>Name:</label>
         <input
           type="text"
           name="name"
           value={form.name}
           onChange={handleChange}
           className={styles.input}
           required
         />
         <div>
           <label className={styles.label}>Price:</label>
           <input
             type="text"
             name="price"
             value={form.price}
             onChange={handleChange}
             required
             className={styles.input}
             pattern="[0-9]+(\.[0-9]+)?"
             title="Please enter only numbers."
           />
         </div>
         <div>
           <label className={styles.label}>Color:</label>
           <input
             type="text"
             name="colors"
             value={form.colors}
             onChange={handleChange}
             
             className={styles.input}
           />
         </div>
         <div>
           <label className={styles.label}>Size:</label>
           <input
             type="text"
             name="sizes"
             
             className={styles.input}
             value={form.sizes}
             onChange={handleChange}
           />
         </div>
         <div>
           <label className={styles.label}>Category:</label>
           <input
             type="text"
             name="category"
             defaultValue=""
            required
             className={styles.input}
             value={form.category}
             onChange={handleChange}
           />
         </div>
         <div>
           <label className={styles.label}>Description:</label>
           <input
             type="text"
             name="description"
             value={form.description}
             onChange={handleChange}
             required
             className={styles.input}
           />
         </div>
         <div>
           <label className={styles.label}>Stock:</label>
           <input
             type="text"
             name="stock"
             value={form.stock}
             onChange={handleChange}
             required
             className={styles.input}
             pattern="[0-9]+(\.[0-9]+)?"
             title="Please enter only numbers."
           />
         </div>
         <p>
         <button className={styles.landingButtonn} type="button" onClick={handleDelete}>
            {form.deleted ? 'Undelete' : 'Delete'}
          </button>
         </p>
         <p>
           <button type="submit" className={styles.landingButtonn}>
             Submit
           </button>
         </p>
       </form>
         <ToastContainer />
     </div>
  );
};

export default EditProductPage;