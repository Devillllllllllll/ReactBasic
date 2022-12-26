import { useContext } from "react"
import DataContext from "./data/DataContext"
import './ReportComponent.css'

const ReportComponent =() => {
    // const name = useContext(DataContext)
    const {income, expense} = useContext(DataContext)
    return (
        <div>
            {/* <DataContext.Consumer>
                {context => <p>รายรับ : {context.income} บาท <br/> รายจ่าย : {context.expense} บาท</p>}
            </DataContext.Consumer> */}
            {/* <p>รายรับ : {income} บาท</p>
            <p>รายจ่าย : {expense} บาท</p> */}
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>฿ {income-expense}</h1>
            <div className="report-container">
                <div>
                    <h4>รายได้ทั้งหมด</h4>
                    <p className="report plus">฿ {income}</p>
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด</h4>
                    <p className="report minus">฿ {expense}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent