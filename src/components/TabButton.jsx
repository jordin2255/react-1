export default function TabButton(/*props*/{children,onSelect,isSelected}){
  return(
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{/*props.children*/children}</button>
    </li>
  )
}