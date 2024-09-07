export default function TabButton(/*props*/{children,onSelect}){
  return(
    <li>
      <button onClick={onSelect}>{/*props.children*/children}</button>
    </li>
  )
}