import { createContext, useState } from 'react';

export const DataContext = createContext(undefined);

export default function DataProvider({ children }) {
  const [data, setData] = useState(null);

  const contextProps = {
    data,
    setData,
  };

  return <DataContext.Provider value={contextProps}>{children}</DataContext.Provider>;
}
