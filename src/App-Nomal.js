import './App.css'
import React from 'react'
import Transaction from './components/Transaction'
import FormComponent from './components/FormComponent'
import { useState, useEffect, useReducer } from 'react'
import DataContext from './components/data/DataContext'
import ReportComponent from './components/ReportComponent'
import './components/FormComponent.css'
import { BrowerRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  const design = { color:'red', textAlign:'center', fontSize:'1.5rem' }
  
  // const initData = [
  //   {id:1, title: "ค่าเช่าบ้าน", amount: -1000},
  //   {id:2, title: "เงินเดือน", amount: 51000},
  //   {id:3, title: "ค่าอุปกรณ์ปีนเขา NedJS", amount: -19020},
  //   {id:4, title: "ค่าเดินทาง", amount: -1500},
  //   {id:5, title: "ค่าประกัน", amount: 11000},
  //   {id:6, title: "เบี้ยประกัน", amount: 1000}
  // ]

  const [items, setItems] = useState([])   // useState(initState)

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

  // reducer state
  // const [showReport, setShowReport] = useState(false)
  // const reducer = (state, action) => {
  //     switch(action.type) {
  //       case "SHOW" :
  //         return setShowReport(true)
  //       case "HIDE" :
  //         return setShowReport(false)
  //     }
  // }
  // const [result, dispatch] = useReducer(reducer, showReport)

  return (
    <>
      {/* เป็นการเขียนเป็น root component โดยมี App เป็นตัวแม่ และมีตัวลูกย่อยๆอยู่ใน App */}
      {/* เรียกว่า respag component */}
      <DataContext.Provider value={
        {
          income : reportIncome,
          expense : reportExpense
        }
      }>
        <div className="container">
          <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>

          {/* ฝึกการใช้งาน Router */}
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
                  <ReportComponent /> {/* {showReport && <ReportComponent />}  // {showReport && <ReportComponent />} */}
                </Route>
                <Route path="/insert">
                  <FormComponent onAddItem={onAddNewItem} />
                  <Transaction items = {items} />
                </Route>
              </Switch>
            </div>
          </Router>



        </div>
        {/* <div>
          <p>Tast Count</p>
          <button  className="btn" onClick={() => dispatch({type:"SHOW"})}>แสดง</button>
          <button  className="btn" onClick={() => dispatch({type:"HIDE"})}>ซ่อน</button>
          <button onClick={() => dispatch({type:"CLEAR"})}>ล้าง</button>
        </div> */}
      </DataContext.Provider>
      {/* nomal */}
      {/* <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
      <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>

      <ul>
        <li>ค่าเดินทาง <span>-200</span></li>
        <li>เงินเดือน <span>+20,000</span></li>
        <li>ค่าอาหาร <span>-500</span></li>
      </ul> */}

      {/* section */}
      {/* <section>
        <article>
          <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
          <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>

          <ul>
            <li>ค่าเดินทาง <span>-200</span></li>
            <li>เงินเดือน <span>+20,000</span></li>
            <li>ค่าอาหาร <span>-500</span></li>
          </ul>
        </article>
      </section> */}


      {/* React.Fragment */}
      {/* <React.Fragment>
        <article>
          <h1>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
          <p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>

          <ul>
            <li>ค่าเดินทาง <span>-200</span></li>
            <li>เงินเดือน <span>+20,000</span></li>
            <li>ค่าอาหาร <span>-500</span></li>
          </ul>
        </article>
      </React.Fragment> */}
    </>
  );
}

export default App;
