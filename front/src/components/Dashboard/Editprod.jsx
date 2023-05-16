import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom";
import styles from "./Editprod.module.css";
import { ToastContainer, toast } from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css';







const EditProductPage = () => {
    
    
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [file, setFile] = useState("")

    const handleSelect = (event) =>{
        setSelectedColor(event.target.value);
       }

       const handleSelectSizes = (event) =>{
        setSelectedSize(event.target.value);
       }

       const handleImage = (e) =>{
        setFile(e.target.files[0])
    } 

    
   
        
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [form, setForm] = useState({
    name: '',
    image: '',
    price: '',
    colors: [],
    sizes: [],
    category: '',
    description: '',
    stock: '',
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${id}`);
        setProduct(response.data);
        setForm(response.data); // Rellenar los campos del formulario con los detalles del producto
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

    try {
      // Realizar la solicitud PUT al servidor con los datos actualizados del producto
      await axios.put(`/products/${id}`, form);
      console.log('Producto actualizado exitosamente');
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Editar Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} />
        <Link to="/home"><button className={styles.landingButtonn}>Henry Market</button></Link>
        <h3>Create products</h3>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div>
                <label htmlFor="name" className={styles.input}>
                  Name:
                  </label>
                <input 
                type="text"   
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                required
                className={styles.label}
                pattern="[A-Za-z0-9 ]+"
                title="Please enter only letters or numbers." />
            </div>
             <div>
                <label htmlFor="Price"  className={styles.input}>
                  Price:
                  </label>
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
      <label htmlFor="colors"  className={styles.input}>
      Select color: {selectedColor}</label>
      <select name="colors" 
      required
      className={styles.input2}
      
      id="colors" 
      value={selectedColor} 
      onChange={handleSelect}>
        <option value="">Select color</option>
        <option value="white">White</option>
        <option value="yellow">Yellow</option>
        <option value="black">Black</option>
        <option value="red">Red</option>
       
      </select>
    
    </div>

    <div>
    <label htmlFor="Size"  className={styles.input}>
  Select size:</label>
  <select name="sizes"  
   required
   className={styles.input2}
   
  onChange={handleSelectSizes}>
    <option value="">Select size {selectedSize}</option>
    <option value="xs">XS</option>
   <option value="s">S</option>
    <option value="m">M</option>
    <option value="l">L</option>
    <option value="xl">XL</option>
    <option value="xxl">XXL</option>
  </select>
</div>
 <div>
                <label htmlFor="Category" className={styles.input}>Select category:</label>
                <select name="category" 
                    defaultValue=""
                     required
                     className={styles.input2}
                    
                     onChange={handleChange}>
                        <option value="">Select category</option>
                        <option value="library">Home</option>
                        <option value="home">Dress</option>
                        <option value="tecnology">Tecnology</option>
                        <option value="tecnology">Bookshop</option>

                    </select>
            </div>
            <div>
                <label htmlFor="Description" className={styles.input}>
                  Description:</label>
                <input 
                type="text" 
                name="description" 
                value={form.description} 
                 onChange={handleChange} 
                 required
                 className={styles.label}
                 
                  />
            </div>
            <div>
                <label htmlFor="Stock" className={styles.input}>
                  Stock:</label>
                <input
                 type="text" 
                 name="stock" 
                 value={form.stock} 
                 onChange={handleChange} 
                 required
                 className={styles.label}
                 pattern="[0-9]+(\.[0-9]+)?"
                 title="Please enter only numbers."

                 />
            </div>
             <div>
                <label htmlFor="Image" className={styles.imageupload}>
                 Image:
                  </label>
                <input 
                type="file" 
                name="image"
                placeholder="Url..." 
                className={styles.imageupload}
                
                autoComplete={"off"}
                onChange={handleImage} />
            </div>

            <p>
        <button type="submit" className={styles.landingButtonn}>
          Submit
        </button>
        </p>
        
        <ToastContainer />

    </form>
        

        <button type="submit">Guardar</button>
      </form>
    </div>
  );

  }


export default EditProductPage;