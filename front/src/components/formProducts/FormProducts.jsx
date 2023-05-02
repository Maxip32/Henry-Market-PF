import { useState } from 'react'

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

const FormProducts = () => {
    
    const [form, setForm] = useState(initialState)
    const [file, setFile] = useState("")

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
        if(form.name === "") return console.log('Name no puede estar vacío')

        const resFound = await fetch(`http://localhost:3001/products/name/${form.name}`)
        const resJson = await resFound.json()

        if(resJson.id) return console.log('producto ya existe')

        const IMAGEURL = await uploadImage()

        const res = await fetch('http://localhost:3001/products/',{
            method:'POST',      
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...form, image:IMAGEURL})
        })
        const data = await res.json()

        if(data.error) return console.log('producto ya existe')
        else return console.log(data)
    }
    
  return (
    <div>
        <h3>Create products</h3>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div>
                <label htmlFor="">name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="">image</label>
                <input type="file" name="image" onChange={handleImage} />
            </div>
            <div>
                <label htmlFor="">price</label>
                <input type="text" name="price" value={form.price}  onChange={handleChange} />
            </div>
            <div>
                <p>colors</p>

                <label><input type="checkbox" name="colors" value="white" onChange={handleCheck} />white</label>
                <label><input type="checkbox" name="colors" value="yellow" onChange={handleCheck} />yellow</label>
                <label><input type="checkbox" name="colors" value="pink" onChange={handleCheck} />pink</label>
                <label><input type="checkbox" name="colors" value="black" onChange={handleCheck} />black</label>
                <label><input type="checkbox" name="colors" value="purple" onChange={handleCheck} />purple</label>
                <label><input type="checkbox" name="colors" value="blue" onChange={handleCheck} />blue</label>
                <label><input type="checkbox" name="colors" value="red" onChange={handleCheck} />red</label>
                <label><input type="checkbox" name="colors" value="orange" onChange={handleCheck} />orange</label>
            </div>
            <div>
                <p>sizes</p>

                <label><input type="checkbox" name="sizes" value="xs" onChange={handleCheck} />xs</label>
                <label><input type="checkbox" name="sizes" value="x" onChange={handleCheck} />x</label>
                <label><input type="checkbox" name="sizes" value="s" onChange={handleCheck} />s</label>
                <label><input type="checkbox" name="sizes" value="m" onChange={handleCheck} />m</label>
                <label><input type="checkbox" name="sizes" value="l" onChange={handleCheck} />l</label>
                <label><input type="checkbox" name="sizes" value="xl" onChange={handleCheck} />xl</label>
                <label><input type="checkbox" name="sizes" value="xl" onChange={handleCheck} />xl</label>
                <label><input type="checkbox" name="sizes" value="xxl" onChange={handleCheck} />xxl</label>
            </div>
            <br/>
            <div>
                <label htmlFor="">category</label>
                <select name="category" 
                    defaultValue=""
                    onChange={handleChange}>
                        <option value="">---</option>
                        <option value="library">library</option>
                        <option value="home">home</option>
                        <option value="tecnology">tecnology</option>
                    </select>
            </div>
            <div>
                <label htmlFor="">description</label>
                <input type="text" name="description" value={form.description}  onChange={handleChange}  />
            </div>
            <div>
                <label htmlFor="">stock</label>
                <input type="text" name="stock" value={form.stock}  onChange={handleChange} />
            </div>

            <input type='submit' value="Enviar" />
        </form>
    </div>
  );
};

export default FormProducts;