import CardCSS from './Card.module.css';

function Card(props) {
    return (
        <div className={CardCSS.card}>
            {props.children}
        </div>
    );
}

export default Card;
