/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
import { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from "./FormProducts.module.css"
import { ToastContainer, toast } from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from "react";
import {  useSelector } from "react-redux";
import SearchBar from "../searchbar/Searchbar";

//import "./FormProducts.css"

const initialState ={
    "name": "",
    "image": "",
    "price": "",
    "colors": [],
    "sizes": [],
    "category": "",
    "description":"",
    "stock": "",
}

          
         // Update state to true once the dog has been successfully created
       
const FormProducts = () => {
 
    
    const [form, setForm] = useState(initialState)
    const [file, setFile] = useState("")
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    const handleSelect = (event) =>{
        setSelectedColor(event.target.value);
       }

       const handleSelectSizes = (event) =>{
        setSelectedSize(event.target.value);
       }

       

    const handleChange = (e) =>{
        const {name, value }= e.target
        setForm({...form, [name]:value})
    }

    function handleCheck(e) {
        const tipoSeleccionado = e.target.value;
        const isChecked = e.target.checked;

        if(e.target.name === 'sizes'){
            if (isChecked) {
              setForm({
                ...form, sizes: [...form.sizes, tipoSeleccionado]
              })
            } else {
              setForm({
                ...form, sizes:[...form.sizes.filter(el => el !== tipoSeleccionado) ]
              })
            }
        }

        if(e.target.name === 'colors'){
            if (isChecked) {
                setForm({
                  ...form, colors: [...form.colors, tipoSeleccionado]
                })
              } else {
                setForm({
                  ...form, colors:[...form.colors.filter(el => el !== tipoSeleccionado) ]
                })
              }
        }   
    }

    const handleImage = (e) =>{
        setFile(e.target.files[0])
    }


    const uploadImage = async (e) => {
        const public_id = file.name.split('.')[0];
        const data = new FormData();
        data.append('file', file, file.name)
        data.append('public_id', public_id);
        data.append('tags', `codeinfuse, medium, gist`)
        data.append('upload_preset', 'uwen44tw')
        data.append('api_key', '136633542476255')
        data.append('timestamp', (Date.now()/1000))

        const cloud_name = 'dzcvicnlw'
        const resource_type = 'image'
        const action = 'upload'

        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${resource_type}/${action}`,
            {
                method: 'POST',
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: data
            })

        const response = await res.json()

        return response.url
    }


    
   


    const handleSubmit = async (e) =>{
      e.preventDefault()
  
      const resFound = await fetch(`http://localhost:3001/products/name/${form.name}`)
      const resJson = await resFound.json()
  
      if(resJson.id) return console.log('Product created')
  
      const IMAGEURL = await uploadImage()
  
      try {
        const res = await fetch('http://localhost:3001/products/',{
            method:'POST',      
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...form, image:IMAGEURL})
        })
        const data = await res.json()

        toast.success("Product created")
        window.location.href = "/home";



        if(data.error) return console.log('producto ya existe')
        else return console.log(data)

    } catch (error) {
        console.log('Product could not be created')

    }
}


  
  

  return (
    <div className={styles.createdog}>
      
      <SearchBar />

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
        </form>
        <ToastContainer />

    </div>
  );
};

export default FormProducts;