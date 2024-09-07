import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";

function App() {
  function handleSelect(selectedComponent){
    console.log(selectedComponent);
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
        <CoreConcepts 
        title={CORE_CONCEPTS[0].title} 
        description={CORE_CONCEPTS[0].description} 
        image={CORE_CONCEPTS[0].image} 
        />
        <CoreConcepts  {...CORE_CONCEPTS[1]}/>
        <CoreConcepts  {...CORE_CONCEPTS[2]}/>
        <CoreConcepts  {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <TabButton onSelect={()=>{handleSelect('Components')}}>Components</TabButton>
          <TabButton onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton>
          <TabButton onSelect={()=>{handleSelect('porps')}}>Props</TabButton>
          <TabButton onSelect={()=>{handleSelect('state')}}>State</TabButton>
          </menu>
        </section>
        Dynamic content
      </main>
    </div>
  );
}

export default App;
