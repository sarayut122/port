import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/unnamed.jpg" />

        <Title title="Sarayut rueangrung (P)">
          <h3>ตำแหน่ง : It support</h3>
        </Title>

        <Title title="Contact">

          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/06/22").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : 0917950421
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : peezaz550@gmail.com</p>
          <p>www.peezaz550@gmail.com</p>
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>ชื่อนามสกุล: นาย.สรายุทธ เรืองรุ่ง
วันเกิด: 22 มิถุนายิน พ.ศ.2545 
อายุ: 21 ปี
เพศ: ชาย
ชาติ: ไทย
ศาสนา: พุทธ</p>
        </Title>

        <Title title="Work Experience">
          <p>เคยสแกนเอกสารที่การนิคมอุตสาหกรรมแห่งประเทศไทย</p>
        </Title>

        <Title title="Skills">
          <p>HTML / CSS / JS</p>
          <p>Adobe photoshop</p>
          <p>Adobe premier pro</p>
          <p>ใช้ Microsoft officeได้</p>
        </Title>
      </div>
    </main>
  )
}

export default App
