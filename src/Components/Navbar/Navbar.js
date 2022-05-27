import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="Images/logo.jpg" alt="Logo" />
      </div>

      <div className="pages">
        <p>หน้าแรก</p>
        <p>เกี่ยวกับเรา</p>
        <p>คลังพระเครื่อง</p>
      </div>

      <div className="register">
        <button>สมัครสมาชิก</button>
      </div>

      <div className='hamButton'>
        <img src="Images/ham.png" alt="Logo" />
      </div>
</div>
  );
}

export default Navbar;
