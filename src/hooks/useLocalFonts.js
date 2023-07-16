
import { useFonts } from 'expo-font';


export default function useLocalFonts () {
    const [loaded] = useFonts({
        IngridDarling: require('../data/fonts/IngridDarling-Regular.ttf'),
        IslandMoments: require('../data/fonts/IslandMoments-Regular.ttf'),
    });

    return loaded;
}