import React, { createContext, useContext, useState } from "react";

const ComingSoonContext = createContext();

export const useComingSoon = () => {
  return useContext(ComingSoonContext);
};

export const ComingSoonProvider = ({ children }) => {
  const [isComingSoonVisible, setIsComingSoonVisible] = useState(false);

  const showComingSoon = () => {
    setIsComingSoonVisible(true);
  };

  const hideComingSoon = () => {
    setIsComingSoonVisible(false);
  };

  return (
    <ComingSoonContext.Provider
      value={{
        isComingSoonVisible,
        showComingSoon,
        hideComingSoon,
      }}
    >
      {children}
    </ComingSoonContext.Provider>
  );
};
