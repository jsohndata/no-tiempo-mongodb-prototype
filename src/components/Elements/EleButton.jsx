
export default function EleButton( {text, onClick} ) {
  
  return (
    <button 
      onClick={onClick}>{text}</button>
  )
}
