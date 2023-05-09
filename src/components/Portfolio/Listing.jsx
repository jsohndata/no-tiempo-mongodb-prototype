import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EleButton from "../Elements/EleButton.jsx";
import Panel from "./Panel.jsx";

export default function Listing() {
  const [data, setData] = useState("");
  const [sortOrder, setSortOrder] = useState("-_id");
  const navigate = useNavigate();

  useEffect(() => { 
    handleList(sortOrder); 
  }, [sortOrder]);


  // Sort
  /* *********************** */
  const handleSortAsc = () => setSortOrder("_id");
  const handleSortDesc = () => setSortOrder("-_id");

  // Go To Form
  /* *********************** */
  const gotoAdd = () => {
    navigate("/Form/");
  }


  // Get List
  /* *********************** */
  const handleList = async(sortOrder) => {
    const response = await fetch(`https://notiempo.lol/api/plants?sort=${sortOrder}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
    });

    const data = await response.json();
    setData(data);
  };

/*  useEffect(() => {
    fetch('https://notiempo.lol/api/plants', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }      
    })
    .then(response => response.json())
    .then(data => setData(data))
    .catch(console.err)
    }, []);

  console.table({data}); */


  // DELETE
  /* *********************** */
  const handleDelete = async(id, title) => {
    try {
      const response = await fetch(`https://notiempo.lol/api/plants/${id}`, {
          "method": "DELETE",
          "headers": {
            "Content-Type": "application/json",
            "Accept": "application/json",
          }
      });

      if (!response.ok) {
        throw new Error("Network error. Try again later.");
      }
  
      // const data = await response.json();
      // console.log(data);
      alert(`${title} has been deleted successfully.`);
      
      // Invoke to get the updated list of records.
      handleList();
    } catch (err) {
      console.error(err);
      alert("Error deleting record. Try again later.");
    }
  };

  return (
    <>
      <h2>h2: Portfolio</h2>
      <div>
        <EleButton text={"Asc"} onClick={handleSortAsc} />
        <EleButton text={"Desc"} onClick={handleSortDesc} />
        <EleButton text={"Add"} onClick={gotoAdd} />        
      </div>

      
      <div>
      {!data
        ? (<p>Loading...</p>)
        : (data.length === 0)
          ? (<p>No records found.</p>) 
          :(data.map((element) => (
            <Panel
              key={element._id}
              data={element}
              handleDelete={handleDelete} />)))
      }
      </div>
    </>
  )
}
