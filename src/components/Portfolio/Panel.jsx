import { useNavigate } from 'react-router-dom';
import EleButton from '../Elements/EleButton.jsx';

export default function Panel({handleDelete, data: {_id, title, common, description, sun, soil, water, native, image}}) {
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
        <p>{common}</p>
        <p>{description}</p>
        <p>{sun}</p>
        <p>{soil}</p>
        <p>{water}</p>
        <p>{native}</p>
      </div>
    </>
  )
}