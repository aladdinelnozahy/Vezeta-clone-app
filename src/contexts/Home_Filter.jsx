import React, { createContext } from 'react';

export const HomeFilterContext = createContext();

const HomeFilterContextProvider = (props) => {
  return (
    <HomeFilterContext.Provider>{props.children}</HomeFilterContext.Provider>
  );
};

export default HomeFilterContextProvider;
