import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useContext,
} from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "usehooks-ts";
import { scratchedPercentContext } from "../contexts/scratchedPercentContext";
import { digimonScratchContext } from "../contexts/digimonScratchContext";

function ScratchCard({ width, height, image, brushSize }) {
  const touchMedia = useMediaQuery("(max-width: 840px)");
  const [isScratching, setIsScratching] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [scratchedPercent, setScratchedPercent] = useState(0);
  const { setScrPercent, setScrPercentMobile } = useContext(
    scratchedPercentContext
  );

  const { digimon } = useContext(digimonScratchContext);

  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const calculateScratchedPercent = useCallback(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const pixels = context.getImageData(0, 0, width, height).data;
    const totalPixels = width * height;
    let scratchedPixels = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] === 0) {
        scratchedPixels += 1;
      }
    }

    setScratchedPercent((scratchedPixels / totalPixels) * 100);
  }, [width, height, imageRef]);

  useEffect(() => {
    if (!touchMedia) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const imageM = imageRef.current;
      imageM.crossOrigin = "anonymous";
      imageM.onload = () => {
        context.drawImage(imageM, 0, 0);
        context.globalCompositeOperation = "destination-out";
      };
    }
  }, []);

  useEffect(() => {
    if (touchMedia) {
      setScrPercentMobile(scratchedPercent.toFixed(2));
    } else {
      setScrPercent(scratchedPercent.toFixed(2));
    }
  }, [scratchedPercent, setScrPercent, setScrPercentMobile, touchMedia]);

  const handleScratch = (e) => {
    if (isScratching) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const rect = canvas.getBoundingClientRect();

      for (let i = 0; i < e.touches.length; i += 1) {
        const touch = e.touches[i];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        context.beginPath();
        context.arc(x, y, brushSize, 0, Math.PI * 2, true);
        context.fill();
      }
    }
  };

  const handleTouchStart = (e) => {
    setIsScratching(true);
    handleScratch(e);
  };

  const handleTouchMove = (e) => {
    handleScratch(e);
  };

  const handleTouchEnd = () => {
    if (isScratching) {
      setIsScratching(false);
      calculateScratchedPercent();
    }
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = useCallback(() => {
    if (isMouseDown) {
      setIsMouseDown(false);
      calculateScratchedPercent();
    }
  }, [isMouseDown, calculateScratchedPercent]);

  const scratch = (e) => {
    if (!isMouseDown) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    context.beginPath();
    context.arc(x, y, brushSize, 0, Math.PI * 2, true);
    context.fill();
  };

  return (
    <div className="sc-container">
      <canvas
        className="sc-canvas"
        ref={canvasRef}
        width={width}
        height={height}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={scratch}
        onMouseUp={handleMouseUp}
      />
      {digimon && (
        <img className="s-image" src={digimon.img} alt={digimon.name} />
      )}
      <img
        ref={imageRef}
        src={image}
        alt="hidden"
        style={{ display: "none" }}
      />
    </div>
  );
}

ScratchCard.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  brushSize: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ScratchCard;
