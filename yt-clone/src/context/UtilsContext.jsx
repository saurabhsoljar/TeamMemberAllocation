import { Children, createContext, useContext, useState } from "react";

const UtilsContext = createContext(null);

export const UtilsContextProvider = ({Children})=>{

  const [isSidebar, setIsSidebar] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);

  return
  <UtilsContext.Provider value={{isSidebar,setIsSidebar,mobileShow,setMobileShow}}>
    {Children}
  </UtilsContext.Provider>
}

export const UseUtils = () =>{
  const UtilsContext = useContext(UtilsContext);

  if(!UtilsContext) return null;

  return UtilsContext;
}