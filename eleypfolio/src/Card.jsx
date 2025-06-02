import './css/cards.css';

export default function Card({ url, title, description, category, techUsed}) {

    return (
        <div className="card">
            <div className="card-contents">
                <div className="card-image">
                    <img src={url} alt={title} />
                </div>
                <div className="card-category">{category}</div>
                <div className="heading">{title}</div>
                <div className="description">{description}</div>
            </div>
        </div>
    );
}