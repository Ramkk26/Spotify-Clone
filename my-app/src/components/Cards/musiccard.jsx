import "./Card.css";
export default function MUsicCard(props) {
  return (
    <div className="music-list col-lg-3 col-md-6 col-sm-6 text-center text-white">
      <div className="music-area">
        <img
          className="music-img"
          src={props.CardData.imgsrc}
          href="#"
          alt="loading  "
        />

        <h3 className="pt-4">{props.CardData.h3}</h3>
        <p className="pt-2">{props.CardData.para}</p>
      </div>
    </div>
  );
}
