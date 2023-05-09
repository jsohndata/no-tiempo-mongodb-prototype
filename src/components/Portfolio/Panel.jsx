import { useNavigate } from 'react-router-dom';
import EleButton from '../Elements/EleButton.jsx';

export default function Panel({handleDelete, data: {_id, title, common, description, sun, soil, water, native, image, when, type}}) {
  const navigate = useNavigate();

  const gotoForm = () => {
    navigate(`/form/${_id}`);
  }

  return(
    <>
      <div style={{"backgroundColor": "orange"}}>
        <EleButton text="Delete" onClick={ () => handleDelete(_id, title) } />
        <EleButton text="Update" onClick={gotoForm} />
        
        <img src={image} width="300" alt={title} />
            
        <h3>h3: {title}</h3>
        <p>common: {common}</p>
        <p>description: {description}</p>
        <p>sun: {sun}</p>
        <p>soil: {soil}</p>
        <p>water: {water}</p>
        <p>native: {native}</p>
        <p>when: {when}</p>
        <p>Type: {type}</p>
      </div>
    </>
  )
}