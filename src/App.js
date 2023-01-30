 import Expenses from './Components/Expenses/Expenses'
 function  App(){
   let expense=[
    {
      id : 'e1',
      title : "Mobile",
      amount : 190,
      date : new Date(2022,10,29)
    },
    {
      id:'e2',
      title:"School fee",
      amount:290,
      date: new Date(2022,11,24)
    },
    {
      id:'e3',
      title:"Tution fee",
      amount:20,
      date: new Date(2022,9,20)
    }
   ]
    return (
      <div><h1>Expense Teacker</h1>
        <Expenses item={expense} />
      </div>
    );
  }

  export default App;