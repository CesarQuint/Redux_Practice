import { Link } from "react-router-dom"

function Header() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container'>
            <h1>
                <Link to={'/'} className="text-light">
                CRUD - React,Redux,Rest API & Axios
                </Link>
            </h1>
        </div>
        <Link to='/productos/nuevo'
            className='btn btn-danger nuevo-post d-block d-md-inline-block'
        >Agregar Producto &#43;</Link>
    </nav>
  )
}

export default Header