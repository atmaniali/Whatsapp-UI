import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  Fontisto,
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";

import DATA from "../data/chatdata";

const Calls = () => {
  const [callData, setCallData] = useState(DATA);

  useEffect(() => {
    setCallData(callData), [];
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.callContainer}>
          <View style={styles.linkContainer}>
            <Fontisto name="link" size={22} color="white" />
          </View>
          <View>
            <Text style={styles.callLink}>Create a call link</Text>
            <Text style={styles.callSubtext}>
              Share a link for your Whatsapp
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Text style={styles.recentText}>Recent</Text>
      <FlatList
        data={callData}
        keyExtractor={(item) => {
          item.id.toString();
        }}
        renderItem={({ item }) => (
          <View style={styles.callContainer}>
            <Image source={item.photos} style={styles.image} />
            <View style={styles.callIconContainer}>
              <View>
                <Text style={styles.callName}>{item.name}</Text>
                <View style={styles.callDetails}>
                  <MaterialCommunityIcons
                    name="call-received"
                    size={15}
                    color="#075e54"
                  />
                  <Text style={styles.callTime}>{item.time}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity>
              <MaterialIcons name="call" size={22} color="#075e54" />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.callButton}
        onPress={() => {
          "#";
        }}
      >
        <MaterialIcons name="add-call" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Calls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  callContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  linkContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#128c7e",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  callLink: {
    fontSize: 16,
    fontWeight: "600",
  },
  callSubtext: {
    fontSize: 14,
    color: "grey",
  },
  recentText: {
    fontSize: 15,
    fontWeight: "600",
    color: "grey",
    marginVertical: 10,
    marginLeft: 16,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  callName: {
    fontSize: 16,
    fontWeight: "600",
  },
  callDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  callTime: {
    fontSize: 14,
    color: "grey",
    marginLeft: 5,
  },
  callIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  callButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#0e806a",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});
