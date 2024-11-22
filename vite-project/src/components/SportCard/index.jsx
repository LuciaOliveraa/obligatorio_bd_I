import "./SportCard.css";

export default function SportCard({ image, title, description, onClick }) {
  return (
    <>
      <div className="coverCard" ></div>
      <div className="card custom-card"  onClick={onClick}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <h1 className="title is-3">{title}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </>
  );
}
