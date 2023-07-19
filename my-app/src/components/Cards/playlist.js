import "./Card.css";



export default function Playlist(playProps) {
  return (
    <div className="PLayList-items">
      <div className="music-area">
        <img
          className="music-img"
          src={playProps.Playcard.imgSrc}
          href="#"
          alt="loading  "
        />

        <h3 className="pt-4">{playProps.Playcard.h3}</h3>
        <p className="pt-2">{playProps.Playcard.para}</p>
      </div>
    </div>
  );
}
