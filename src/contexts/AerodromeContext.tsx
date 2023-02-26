import React, { createContext, useContext, useState } from 'react';

interface IAerodromeContext {
    jsonData: any;
    setJsonData: any;
}

const AerodromeDataContext = createContext<IAerodromeContext>({} as IAerodromeContext);

export const AerodromeJsonDataProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [jsonData, setJsonData] = useState<{} | null>(null);

    return (
        <AerodromeDataContext.Provider
            value={{
                jsonData,
                setJsonData
            }}
        >
            {children}
        </AerodromeDataContext.Provider>
    );
}

export const useAerodromeData= () => {
    return useContext(AerodromeDataContext);
}