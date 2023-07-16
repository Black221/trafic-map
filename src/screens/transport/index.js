import React, { useState, useEffect } from "react";
import { Image, ScrollView, View, TextInput, Pressable, Text } from "react-native";
import dimensions from "../../constants/Dimensions";
import MapView from "react-native-maps";
import useAppState from "../../hooks/useAppState";

import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";

function Transport({ navigation }) {

    const [email, setEmail] = useState("");
	const {region, setRegion} = useAppState();

    const [location, setLocation] = useState(null);
	const [toogle, setToogle] = useState(false);
	const [selected, setSelected] = useState("");

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
			<View style={{ position: "absolute", alignSelf: "center", zIndex: 100, top: 32}}>
				<TextInput style={input}
					placeholder="Rechercher..."
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

			<ScrollView  style={{  backgroundColor: "white", maxHeight: selected !== "" ? 450 : 125, borderTopStartRadius: 40, borderTopEndRadius: 40, padding: 20,  transition: "linear" }}>
				{selected !== "" && <Pressable onPress={() => setSelected("")} style={{ alignSelf: "flex-end", marginVertical: 5}}>
					<Text>Fermer</Text>
				</Pressable>}

				<ScrollView horizontal={true} style={{ flexDirection: "row", }}>
					<Pressable onPress={() => {setSelected("Taxi")}}>
						<Image source={img1} style={{width: 80, height: 80, marginRight: 20, borderRadius: 6}} />
					</Pressable>
					<Pressable onPress={() => {setSelected("Cars Rapides")}}>
						<Image source={img2} style={{width: 80, height: 80, marginRight: 20, borderRadius: 6}} />
					</Pressable>
					<Pressable onPress={() => {setSelected("Moto")}}>
						<Image source={img3} style={{width: 80, height: 80, marginRight: 20, borderRadius: 6}} />
					</Pressable>
					<Pressable onPress={() => {setSelected("Bus")}}>
						<Image source={img4} style={{width: 80, height: 80, marginRight: 20, borderRadius: 6}} />
					</Pressable>
				</ScrollView>

				{selected !== "" && <View style={{ backgroundColor: "white", marginTop: 10 }}>
					<Text style={{ fontSize: 24}}>{selected}</Text>
					<Text>Informations...</Text>
				</View>}
			</ScrollView>

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

export default Transport;