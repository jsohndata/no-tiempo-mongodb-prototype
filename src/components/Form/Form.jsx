import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function Form() {  
  const [formData, setFormData] = useState({});  
  const navigate = useNavigate();
  const {id} = useParams();

  // handle Form
  /* *********************** */
  const handleForm = e => {
    e.preventDefault();

    const fetchUrl = (id) 
      ? `https://notiempo.lol/api/plants/${id}` 
      : 'https://notiempo.lol/api/plants';
    
    const httpMethod = (id) ? "PATCH" : "POST";

    const fetchData = async() => {          
      const res = await fetch(fetchUrl, {        
        method: httpMethod,
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      setFormData(data);
      navigate("/portfolio");
    }

    fetchData().catch(err => console.error(err));
  }

  // handle Input Change
  /* *********************** */
  /* Before
    onChange={ e => setFormData( {...formData, qr: e.target.value} )}

    Now
    onChange={handleInputChange}
  */  
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData( {...formData, [name]: value} );
  }
  
  return(
    <>
      <h2>h2: Form {(id) ? "Update" : "Add"}</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Title</label>
        <input 
          type="text" 
          name="title"
          value={formData.title || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Common</label>
        <input 
          type="text" 
          name="common"
          value={formData.common || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Description</label>
        <input 
          type="text" 
          name="description"
          value={formData.description || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Sun</label>
        <input 
          type="text" 
          name="sun"
          value={formData.sun || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Soil</label>
        <input 
          type="text" 
          name="soil"
          value={formData.soil || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Water</label>
        <input 
          type="text" 
          name="water"
          value={formData.water || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Native</label>
        <input 
          type="text" 
          name="native"
          value={formData.native || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">QR</label>
        <input 
          type="text" 
          name="qr"
          value={formData.qr || ""}
          onChange={handleInputChange} />

        <br />

        <label htmlFor="name">Image</label>
        <input 
          type="text" 
          name="image"
          value={formData.image || ""}
          onChange={handleInputChange} />

        <br />
        
        <button 
          type="submit"
          onClick={ e => handleForm(e)}>{(id) ? "Update" : "Add"}</button>
      
      </form>
    </>
  )
}