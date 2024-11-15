import './Administration.css'
import Navbar from '../../components/NavBar'
import Students from '../../components/Students'
import StadisticsContainer from '../../components/StadisticsContainer'
import Instructors from '../../components/Instructors'
import Activities from '../../components/Activities'
import Shifts from '../../components/Shifts'

export default function Administration() {
  return (
    <div className="admin-page">
      <Navbar></Navbar>

      <div className='admin-container'>
        <StadisticsContainer />
        <Students></Students>
        <Instructors></Instructors>
        <Activities></Activities>
        <Shifts></Shifts>
      </div>
    </div>
  )
}
