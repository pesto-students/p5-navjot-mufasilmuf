import { createContext, useState } from "react";

export const GlobalContext = createContext({
    shortenUrl: [],
    setShortenUrl: () => { }
});

export const ContextWrapper = ({ children }) => {
    const [shortenUrl, setShortenUrl] = useState([]);

    return <GlobalContext.Provider value={{
        shortenUrl,
        setShortenUrl
    }}>{children}</GlobalContext.Provider>
}