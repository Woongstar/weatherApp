import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const APIkey = "ed17ca8cd7259aa5f225fa92a3579ad3";

export default class extends React.Component {
  state = {
    inLoading: true,
  };
  getWeather = async (latitude, longtitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&APPID=${APIkey}`
    );
    console.log(data);
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
    return isLoading ? <Loading /> : null;
  }
}
