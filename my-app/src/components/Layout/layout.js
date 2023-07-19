import Footer from "../Footer/footer";
import MusicCard from "../Cards/musiccard";
import PlatlistData from "../Cards/playListData";
import Playlist from "../Cards/playlist";
import MusicLIstdata from "../Cards/musicListDatA";
import Header from "../Header/header";
import Navbar from "../Navbar/navbar";

export default function Layout() {
  let card = MusicLIstdata.map((carditem) => {
    return (
      <MusicCard
        CardData={{
          imgsrc:carditem.imgsrc,
          h3:carditem.h3,
          para:carditem.para,
        }}
      />
    );
  });

  const Playlistcontent = PlatlistData.map((playitem) => {
    return (
      <Playlist
        Playcard={{
          imgSrc:playitem.imgSrc,
          h3:playitem.h3,
          para:playitem.para,
        }}
      />
    );
  });
  return (     

   
    <div className="Layout">

      <Header />
      <div className="music-container">
        <div className="scroll-it">
          <div className="music-head d-flex align-items-center justify-content-between">
            <h3>Focus</h3>
            <a href="#">Show all</a>
          </div>
          <div className="music-item d-flex justify-content-between align-items-center gap-2">
            {card}
          </div>
          <div className="music-head d-flex align-items-center justify-content-between">
            <h3>Spotify Playlists</h3>
            <a href="#">Show all</a>
          </div>
          <div className="Playmusic-item d-flex justify-content-between align-items-center gap-2">
            {Playlistcontent}
          </div>
          <div className="music-head d-flex align-items-center justify-content-between">
            <h3>Sound Of India</h3>
            <a href="#">Show all</a>
          </div>
          <div className="Playmusic-item d-flex justify-content-between align-items-center gap-2">
            {Playlistcontent}
          </div>
        </div>
        <Footer />
      </div>
    </div>

  );
}
