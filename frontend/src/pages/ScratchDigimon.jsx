import { useMediaQuery } from "usehooks-ts";
import { useContext, useEffect, useState } from "react";

import { useNavigate, useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ScratchCard from "../components/ScratchCard";
import ReveltCard from "../assets/revelt-card.png";
import ReveltCardMobile from "../assets/revelt-card-mobile.png";
import { scratchedPercentContext } from "../contexts/scratchedPercentContext";
import WinGame from "../components/WinGame";
import LoseGame from "../components/LoseGame";
import SubmitScratch from "../components/SubmitScratch";
import { digimonScratchContext } from "../contexts/digimonScratchContext";
import Rendomiser from "../services/Rendomiser";
import { updateDigiPoint } from "../actions/user.action";
import "../scss/ScratchDigimon.scss";

function ScratchDigimon() {
  const [gamestate, setGameState] = useState("game");
  const [digiPoints, setDigiPoints] = useState(400);
  const { scrPercent, scrPercentMobile } = useContext(scratchedPercentContext);
  const { setDigimon, digimon } = useContext(digimonScratchContext);
  const touchMedia = useMediaQuery("(max-width: 840px)");
  const dataDigimon = useSelector((state) => state.digimonReducer);
  const { user, collected } = useOutletContext();
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    if (scrPercent >= 9) {
      setDigiPoints(Math.max(digiPoints - 60, 0));
    }
  }, [scrPercent, setDigiPoints]);

  useEffect(() => {
    if (scrPercentMobile >= 9) {
      setDigiPoints(Math.max(digiPoints - 60, 0));
    }
  }, [scrPercentMobile, setDigiPoints]);

  useEffect(() => {
    setDigimon(Rendomiser(dataDigimon));

    const isAlreadyCollected =
      Array.isArray(collected) &&
      collected.some((data) => data.id === dataDigimon.id);
    if (isAlreadyCollected) {
      setDigimon(Rendomiser(dataDigimon));
    }
  }, [dataDigimon, setDigimon]);

  const clickRestart = () => {
    setGameState("game");

    setDigimon(Rendomiser(dataDigimon));
  };

  if (gamestate === "game") {
    return (
      <section className="game">
        <h2 className="h1">Scratch Digimon</h2>
        <div className="c-g">
          <p className="g-dp">Win: {digiPoints}DP</p>
          {touchMedia ? (
            <ScratchCard
              className="g-s"
              width={250}
              height={300}
              image={ReveltCardMobile}
              brushSize={7}
            />
          ) : (
            <ScratchCard
              className="g-s"
              width={350}
              height={450}
              image={ReveltCard}
              brushSize={9}
            />
          )}
          <p className="g-cp">{touchMedia ? scrPercentMobile : scrPercent}%</p>
        </div>
        <SubmitScratch
          digiPoints={digiPoints}
          digimon={digimon}
          setGameState={setGameState}
          user={user}
          dispatch={dispatch}
          updateDigiPoint={updateDigiPoint}
        />
      </section>
    );
  }

  if (gamestate === "win") {
    return (
      <section className="win">
        <WinGame
          clickRestart={clickRestart}
          digimon={digimon}
          digiPoints={digiPoints}
          setDigiPoints={setDigiPoints}
        />
      </section>
    );
  }

  if (gamestate === "lose") {
    return (
      <section className="lose">
        <LoseGame clickRestart={clickRestart} setDigiPoints={setDigiPoints} />
      </section>
    );
  }
}

export default ScratchDigimon;
