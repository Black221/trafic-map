import * as React from "react";
import {View, StyleSheet, Pressable} from "react-native";
import MapView from "react-native-maps";
import {useEffect, useState} from "react";
import {Foundation} from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import useAppState from "../../hooks/useAppState";
// import Navbar from "./Navbar";
import * as Location from 'expo-location';


export default function Maps ({navigation}) {


    const {showMenu} = useAppState();
    const {region, setRegion} = useAppState();

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);


    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location)

        })();
    }, []);

    // let text = 'Waiting..';
    // if (errorMsg) {
    //     text = errorMsg;
    // } else if (location) {
    //     text = JSON.stringify(location);
    // }

    useEffect(() => {
        if (location)
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.09,
                longitudeDelta: 0.09
            })
    }, [location]);


    return (
        <View style={styles.container}>
            <MapView style={[styles.map]}
                     showsUserLocation={true}
                     customMapStyle={mapStyle}
                     region={region}
                     initialRegion={region}
                     onRegionChangeComplete={setRegion}
            />
            <View style={{
                position: 'absolute',
                top: '1.75%',
                right: '17%',
                flexDirection: 'row',
            }} >
                <Pressable style={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'rgba(1,110,234,0.5)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    marginRight: 10
                }}>
                    <Foundation name="shopping-cart" size={30} color="white" />
                </Pressable>
                <Pressable  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'rgba(1,110,234,0.5)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                }}>
                    <MaterialIcons name="delivery-dining" size={30} color="white" />
                </Pressable>
            </View>
            {/* {showMenu && <Navbar navigation={navigation}/>} */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

const mapStyle = [
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#3f7ce0'}],
    },
];