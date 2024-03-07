//import ListGroup from "./components/ListGroup";
//import Alert from "./components/Alert";
   import Button from "./components/Button";

function App(){
  //let items =['New York','San Francisco','Tokyo','London','Paris'];
//const handleSelectItem = (item: string) =>
//console.log(item);
  return(
    <div>
      <Button onClick={() => console.log('clicked')} >My Button</Button>
    </div>
  ) 
  //<div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
}

export default App;