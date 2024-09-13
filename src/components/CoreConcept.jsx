export default function CoreConcept(/*props*/{image,title,description}){
  return(
    <li>
      <img src={/*props.image*/image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}