import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const digimonScratchContext = createContext();

function DigimonScratchProvider({ children }) {
  const [digimon, setDigimon] = useState([]);

  const value = useMemo(() => ({ digimon, setDigimon }), [digimon, setDigimon]);

  return (
    <digimonScratchContext.Provider value={value}>
      {children}
    </digimonScratchContext.Provider>
  );
}

DigimonScratchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { digimonScratchContext, DigimonScratchProvider };
