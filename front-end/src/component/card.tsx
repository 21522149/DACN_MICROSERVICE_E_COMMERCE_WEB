import "../Style/home.css";

interface Props {
  name: string;
  price: number;
  imgsrc: string;
  category: string;
}

const Card = ({ name, price, imgsrc, category }: Props) => {
  return (
    <div className="item">
      <img src={imgsrc} alt="" />
      <p>{name}</p>
      <p>{category}</p>
      <ul>
        <li>
          <i className="fa fa-dollar-sign">{price}</i>
        </li>
      </ul>
    </div>
  );
};

export default Card;
