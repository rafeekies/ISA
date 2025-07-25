import { BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo">
            <BookOpen size={32} color="#2563eb" />
            <span>Islamic Schools Association</span>
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/schools">Schools</Link></li>
            <li><Link to="/membership">Membership</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
