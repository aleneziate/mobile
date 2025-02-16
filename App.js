import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        }}
        style={{
          width: 150,
          height: 150,
          borderRadius: 50,
        }}
      />
      <Text style={{ color: "black", fontSize: 20, marginTop: 10 }}>
        Abdallah
      </Text>
      <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
        Kuwait
      </Text>

      {/* flex-direction: horizontal */}
      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 10, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            80K
          </Text>
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            Followers
          </Text>
        </View>
        <View style={{ margin: 10, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            104K
          </Text>
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            Likes
          </Text>
        </View>
        <View style={{ margin: 10, alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            1.4K
          </Text>
          <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            photos
          </Text>
        </View>

      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C6778",
    alignItems: "center",
    justifyContent: "center",
  },
});
