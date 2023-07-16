import React, { useState, useEffect } from "react";
import { Image, ScrollView, View, TextInput, Text } from "react-native";
import dimensions from "../../constants/Dimensions";
import MapView from "react-native-maps";


import useAppState from "../../hooks/useAppState";

function Trafic({ navigation }) {

    const [email, setEmail] = useState("");
	const {region, setRegion} = useAppState();

    const [location, setLocation] = useState(null);
    // const [errorMsg, setErrorMsg] = useState(null);


    // useEffect(() => {
    //     (async () => {

    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== 'granted') {
    //             setErrorMsg('Permission to access location was denied');
    //             return;
    //         }

    //         let location = await Location.getCurrentPositionAsync({});
    //         setLocation(location)

    //     })();
    // }, []);

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
		<View style={{ flex: 1, flexDirection: "column"}}>
			<View style={{ position: "absolute", alignSelf: "center", zIndex: 100, top: 30}}>
				<TextInput style={[input, { marginTop: "5%"}]}
					placeholder="--> Position A..."
					placeholderTextColor="gray"
					onChangeText={setEmail}
					value={email}
				/>
				<TextInput style={[input, { marginTop: "2%"}]}
					placeholder="<-- Position B..."
					placeholderTextColor="gray"
					onChangeText={setEmail}
					value={email}
				/>
			</View>

			<View style={{ flex: 1,  }}>
				<MapView style={{width: '100%',height: '100%',}}
						showsUserLocation={true}
						customMapStyle={mapStyle}
						region={region}
						initialRegion={region}
						onRegionChangeComplete={setRegion}
				/>
			</View>

			<View style={{ backgroundColor: "white", padding: 20}}>
				<View style={{flexDirection: "row", alignItems: "center"}}>
					<View style={{backgroundColor: "red", width: 10, height: 10, marginRight: 20}}></View>
					<Text>Forte chance d’embouteillage</Text>
				</View>
				<View style={{flexDirection: "row", alignItems: "center"}}>
					<View style={{backgroundColor: "yellow", width: 10, height: 10, marginRight: 20}}></View>
					<Text>Présente des risques d’embouteillage</Text>
				</View>
				<View style={{flexDirection: "row", alignItems: "center"}}>
					<View style={{backgroundColor: "blue", width: 10, height: 10, marginRight: 20}}></View>
					<Text>Zone praticable</Text>
				</View>
			</View>
		</View>
	);
}

const input = {
	alignSelf: 'center',
	width: dimensions.window.width * 10 / 12,
	fontSize: 16,
	padding: 16,
	paddingVertical: 10,
	borderRadius: 22,
	color: 'black',
	backgroundColor: 'white'
}

const mapStyle = [
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#3f7ce0'}],
    },
];

export default Trafic;