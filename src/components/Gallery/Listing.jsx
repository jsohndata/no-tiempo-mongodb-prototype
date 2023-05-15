import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EleButton from "../Elements/EleButton.jsx";
import Panel from "./Panel.jsx";

export default function Listing() {
  const [data, setData] = useState("");
  const [sortOrder, setSortOrder] = useState("-_id");
  const [filterType, setFilterType] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => { 
    handleList(sortOrder, filterType, filterValue); 
  }, [sortOrder, filterType, filterValue]);


  // Sort
  /* *********************** */
  const handleSortAsc = () => setSortOrder("_id");
  const handleSortDesc = () => setSortOrder("-_id");
  

  // Filter
  /* *********************** */
  const handleFilter = (e) => {
    const {value} = e.target;

    if (value === "all") {  
      setFilterType("");
      setFilterValue("");
      return;
    }
    
    setFilterType("when");
    setFilterValue(value);
  }


  // Go To Form
  /* *********************** */
  const gotoAdd = () => {
    navigate("/Form/");
  }


  // Get List
  /* *********************** */
  const handleList = async(sortOrder) => {

    const apiUrl = (filterType && filterValue)
        ? `https://notiempo.lol/api/plants/filter/${filterType}/${filterValue}`
        : `https://notiempo.lol/api/plants?sort=${sortOrder}`

    console.log(apiUrl)

    const response = await fetch(apiUrl, {
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

        <select name="when" onChange={handleFilter}>
          <option value="all">All</option>
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          <option value="wednesday">Wednesday</option>
        </select>

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
