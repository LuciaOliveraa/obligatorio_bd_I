import './EquipmentCard.css'

export default function EquipmentCard({image,title}) {
    return (
        <>
            <div class="card custom-card">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img
                        src={image}
                        alt={title} 
                    />
                    </figure>
                </div>
                <div class="card-content">
                    <p className='title'>{title}</p>
                </div>
            </div>
        </>
    )
}