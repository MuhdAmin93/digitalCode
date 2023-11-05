import { useState, useContext, createContext, Children } from "react";

const AppContext = createContext();
export const useList = () => useContext(AppContext);

export const StateProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [number, setNumber] = useState("");
  const savedName = localStorage.getItem("saveName");
  const savedNumber = localStorage.getItem("saveNumber");
  const savedFeedback = localStorage.getItem("saveFeedback");
  const [saveName, setSaveName] = useState(" ");
  const [saveNumber, setSaveNumber] = useState("");
  const [saveFeedback, setSaveFeedback] = useState("");

  return (
    <AppContext.Provider
      value={{
        name,
        setName,
        feedback,
        setFeedback,
        number,
        setNumber,
        savedName,
        savedNumber,
        savedFeedback,
        saveName,
        setSaveName,
        saveNumber,
        setSaveNumber,
        saveFeedback,
        setSaveFeedback
      }}>
      {children}
    </AppContext.Provider>
  );
};
