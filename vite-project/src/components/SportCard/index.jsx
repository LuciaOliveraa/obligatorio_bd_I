import './SportCard.css'

export default function SportCard({image,title,description}) {

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
                    <h1>{title}</h1>
                    <p className='description'>{description}</p>
                </div>
                </div>
        </>
    )
}