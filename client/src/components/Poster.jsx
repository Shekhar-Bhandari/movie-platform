
export default function Poster(props){
  return (
    <div className="bg-gray-800 rounded overflow-hidden flex-shrink-0 w-56">
    <img src={props.img} alt="Avatar" className="w-full"/>
  </div>
  )
}