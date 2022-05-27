import './About.css'

function About() {
    return (
        <div className='about'>
            <div className='aboutText'>
            <h4>ทำไมต้องเลือกเรา</h4>
            <p>สถาบันรับรองและตรวจสอบวัตถุมงคลประเทศไทย <br/>
                ก่อตั้งโดยคณะกรรมการผู้ทรงคุณวุฒิและมีประสบการณ์ในวงการพระเครื่องมากกว่า 30 ปี <br/>
                ซึ่งเป็นที่ยอมรับและรู้จักในวงการพระเครื่องเป็นอย่างดี <br/>
                และทำให้มั่นใจได้ว่าใบรังรองจากทางสถาบัน ACI ได้ผ่านการตรวจสอบ
            </p>

            <button>เพิ่มเติม</button>
            </div>
            <div>
                <img src='Images/about.jpg' alt='about' />
            </div>
        </div>
    )
}

export default About;