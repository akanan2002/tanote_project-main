import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const guestNav = [
  { to: '/', text: 'เข้าสู่ระบบ' },
  { to: '/register', text: 'ลงทะเบียน' },
]

const userNav = [
  { to: '/', text: 'ข้อมูลสไตล์โปรไฟล์' },
  { to: '/siz', text: 'บอกสไตล์ของคุณ' },
]

const catNav = [
  // { to: '/', text: 'ข้อมูลเทส' },
  { to: '/About', text: 'เกี่ยวกับเรา' },
  { to: '/step', text: 'ขั้นตอนการบริการ' },
  { to: '/serve', text: 'ค่าบริการ' },
  { to: '/contact', text: 'ติดต่อเรา' },
]

export default function Header() {
  const { user, logout } = useAuth()
  const finalNav = user?.id ? userNav : guestNav
  const cat = user?.id ? catNav : catNav

  const navigate = useNavigate()

  const hdlLogout = () => {
    logout()
    navigate('/')
  }

  return (

    //   <div className="flex-none">
    //   <ul className="menu menu-horizontal px-1">
    //     {cat.map(el => (
    //       <li key={el.to} >
    //         <Link to={el.to}>{el.text}</Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">L0GO, {user?.id ? user.username : 'กรุณาลงชื่อเข้าใช้'}</a>

        {/* สปุ่ม button ด้านซ้าย */}
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {cat.map(el => (
              <li key={el.to} >
                <Link to={el.to}>{el.text}</Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {finalNav.map(el => (
            <li key={el.to} >
              <Link to={el.to}>{el.text}</Link>
            </li>
          ))}
          {user?.id && (
            <li>
              <Link to='#' onClick={hdlLogout}>ออกจากระบบ</Link>
            </li>
          )}
        </ul>

      </div>
    </div>
  );
}

