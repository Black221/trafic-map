import React from "react";
import {Animated, Pressable, Text, View, Image, ScrollView} from "react-native";

import map from "../../../assets/map.png";
import transport from "../../../assets/transport.png";

function Home({ navigation }) {
    return (
		<ScrollView >
			
			<View style={{ alignItems: "center", height: 340}}>
				<View style={{ height: 500, width: 500, backgroundColor: "#3B90A0", borderRadius: 250, position: "absolute", top: -200 }}>
					
				</View>

				<View style={{ flexDirection: "row", justifyContent: "space-around", width: 480, marginTop: 30}}>
					<View>
						<Text style={{color: "white", fontSize: 24}}>Lundi</Text>
						<Text style={{color: "white"}}>14 Mai 2023</Text>
					</View>
					<Text style={{fontSize: 18}}>20°C</Text>
				</View>

				<View style={{marginTop: 36}}>
					<Text style={{color: "white", fontSize: 36}}>Guediaway</Text>
					<Text style={{color: "white", textAlign: "center"}}>Golf sud, amo 3</Text>
				</View>

				<View style={{marginTop: 40}}>
					<Text style={{color: "white", fontSize: 14}}>etat trafic : stable</Text>
				</View>
			</View>

			<View style={{ flexDirection: "row", justifyContent: "space-around", height: 220, alignItems: "center"}}>
				<Pressable 
					style={{ alignSelf: "flex-start"}} 
					onPress={() => {
						navigation.navigate("Trafic")
					}}
				>
					<Image source={map} style={{ width:160, height:190 }} />
					<Text style={{ textAlign: "center" }}>Etat trafic</Text>
				</Pressable>
				<Pressable 
					style={{ alignSelf: "flex-end"}}
					onPress={() => {
						navigation.navigate("Transport")
					}}
				>
					<Text style={{ textAlign: "center" }}>Transport</Text>
					<Image source={transport} style={{ width:160, height:190 }} />
				</Pressable>
			</View>

			<View>

			</View>
        </ScrollView>
	);
}

export default Home;