import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className='address'>
        <h6>ที่ตั้งบริษัท</h6>
        <p>2972 Westheimer Rd,  <br/>Santa Ana, Illinois  <br/>85486</p>
        <p>0812345666</p>
      </div>

      <div className='menu'>
        <p>หน้าแรก</p>
        <p>เกี่ยวกับเรา</p>
        <p>คลังพระเครื่อง</p>
      </div>

      <div className='copyright'>
          <p>Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
