import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Text } from "native-base";

class HomeScreen extends React.Component {
  static navigationOptions = {
    // header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.4 }}>
          <ImageBackground
            source={require("../assets/images/school.jpg")}
            style={styles.headerImage}
          >
            <Text style={{ fontSize: 20 }}>SK Duyong</Text>
            <Text style={{ fontSize: 20 }}>Attendance System</Text>
          </ImageBackground>
        </View>
        <View style={{ flexDirection: "row", flex: 0.2, marginTop: 20 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CreateStudent")}
            style={[styles.categoryCard, { backgroundColor: "#480273" }]}
          >
            <Text style={styles.categoryCardText}>New Student</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("CreateAttendance")}
            style={[styles.categoryCard, { backgroundColor: "#6F0C94" }]}
          >
            <Text style={styles.categoryCardText}>New Attendance</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", flex: 0.2 }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("GetStudent")}
            style={[styles.categoryCard, { backgroundColor: "#A5F0CE" }]}
          >
            <Text style={styles.categoryCardText}>View Student</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("GetAttendance")}
            style={[styles.categoryCard, { backgroundColor: "#3FB48A" }]}
          >
            <Text style={styles.categoryCardText}>View Attendance</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.2 }} />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  getStartedContainer: {
    alignItems: "center",
    paddingHorizontal: 30
  },

  categoryCard: {
    flex: 0.5,
    marginHorizontal: 5,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },

  categoryCardText: { fontSize: 16, color: "white", fontWeight: "bold" },

  headerImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5
  }
});
