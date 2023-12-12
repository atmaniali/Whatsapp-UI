import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";

import Header from "./Header";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <View>
      <Text>Hi</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

// <View style={styles.container}>
//       <StatusBar backgroundColor="#0e806a" barStyle="light-content" />
//       <Header />
//       <View style={{ flex: 1, backgroundColor: "white" }}>
//         <Navigation />
//       </View>
//     </View>
