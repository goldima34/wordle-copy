import './GlobalStyles/page.scss'
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
   <>
   <NavBar/>
   <div className="buttonsContainer">
      <a href="/game" className="playBtn">
        <div className="content">
          <h2>PLAY</h2>
          <h2>PLAY</h2>
        </div>
      </a>
   </div>
   </>
  );
}
