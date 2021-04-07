import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";

export default class extends React.Component {
  state = {
    inLoading: true,
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longtitude },
      } = await Location.requestPermissionsAsync();
      // Send to API and get weather
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    }
  };
  conponentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return inLoading ? <Loading /> : null;
  }
}
