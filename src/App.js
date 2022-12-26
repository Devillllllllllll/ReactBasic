import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import './App.css'
import { useState, useEffect } from 'react';
import DataContext from './components/data/DataContext';
import ReportComponent from './components/ReportComponent';
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function App() {
  const design = { color:'red', textAlign:'center', fontSize:'1.5rem' }
  const initData = [
    {id:1, title: "ค่าเช่าบ้าน", amount: -1000},
    {id:2, title: "เบี้ยประกัน", amount: 101000}
  ]

  const [items, setItems] = useState(initData)

  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)

  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem,...prevItem]
    })
  }

  useEffect (() => {
      const amounts = items.map(items => items.amount)
      const income = amounts.filter(element => element > 0).reduce((total,element) => total += element,0)
      const expense = (amounts.filter(element => element < 0).reduce((total,element) => total += element,0)) *-1
      setReportIncome(income)
      setReportExpense(expense)
  },[items, reportIncome, reportExpense])

  return (
      <DataContext.Provider value={{ income : reportIncome, expense : reportExpense }}>
        <div className="container">
          <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
          <Router>
            <div>
              <ul className="horizontal-menu">
                <li>
                  <Link to="/">ข้อมูลบัญชี</Link>
                </li>
                <li>
                  <Link to="/insert">บันทึกข้อมูล</Link>
                </li>
              </ul>
              <Switch>
                <Route path="/" exact>
                  <ReportComponent/>
                </Route>
                <Route path="/insert">
                  <FormComponent onAddItem={onAddNewItem}/>
                  <Transaction items = {items}/>
                </Route>
              </Switch>
            </div>
            
          </Router>
          
        </div>
      </DataContext.Provider>
  );
}

export default App;
