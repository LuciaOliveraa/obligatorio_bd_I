import SportCard from "../SportCard"
import motorbikeImage from '../../assets/motorbike.png';
import snowboardImage from '../../assets/skateboard.png'
import skiImage from '../../assets/ski.png'
import './SportsContainer.css'

export default function SportsContainer() {

    return (
        <div className="card-container">
            <SportCard 
                image={motorbikeImage}
                title='Snowmobile'
                description='High-speed adventure on snow trails'
            />
            <SportCard 
                image={snowboardImage}
                title='Snowboard'
                description='Freestyle and downhill on snowy slopes'
            />
            <SportCard 
                image={skiImage}
                title='Ski'
                description='Classic skiing for all experience levels'
            />
        </div>
    )
}