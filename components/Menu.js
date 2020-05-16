import Link from 'next/link'

class Menu extends React.Component {
  render() {
    return(
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link href="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link href="/projects">My Projects</Link>
        </li>
        <li className="nav-item">
          <Link href="/about">About me</Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">Contact Me</Link>
        </li>
      </ul>
    )
  }
}
export default Menu
