import Navbar from "../../components/NavBar"
import './HomePage.css'
import SportCard from "../../components/SportCard"
import motorbikeImage from '../../assets/motorbike.png';

export default function HomePage () {


    return (
        <div className='homePage'>
            <Navbar></Navbar>
            <div className="home-container">
                <SportCard 
                    image={motorbikeImage}
                    title='motorbike'
                    description='locura maximaaaaa ekjfkfnañlksñldkndnfdfknvldnldknflkdnfslkdnf'
                />
            </div>
        </div>
    )
}