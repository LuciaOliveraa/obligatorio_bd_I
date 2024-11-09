import './Administration.css'
import Navbar from '../../components/NavBar'
import Students from '../../components/Students'


export default function Administration() {
  return (
    <div className="admin-page">
      <Navbar></Navbar>
      <div className='admin-container'>
        <Students></Students>
      </div>
    </div>
  )
}
