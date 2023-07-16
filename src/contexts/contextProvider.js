import React, { createContext, useState} from "react";

export const AppState = createContext(undefined);


export const AppProvider = ({ children}) => {

    const [region, setRegion] = useState({
        latitude: 14.777246,
        longitude: -17.388602,
        latitudeDelta: 0.1,
        longitudeDelta: 0.05,
    });
    const [search, setSearch] = useState("");
    const [regionSearch, setRegionSearch] = useState("");
    const [deliverySearch, setDeliverySearch] = useState("");

    const [showMenu, setShowMenu] = useState(false);

    return (
        <AppState.Provider value={{
            region, setRegion,
            search, setSearch,
            regionSearch, setRegionSearch,
            deliverySearch, setDeliverySearch,
            showMenu, setShowMenu
        }}>
            {children}
        </AppState.Provider>
    )
}
