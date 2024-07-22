import { View, Text, SafeAreaView, StatusBar, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
// import ImageSlider from "../components/ImageSlider";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-10">
      <StatusBar style="dark" />

      {/*  icons section */}

      <View className="flex-row justify-between items-center mx-4">
        <View className="space-y-1">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-extrabold tracking-wider text-neutral-700 uppercase"
          >
            {" "}
            Ready To
          </Text>

          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-extrabold tracking-wider  text-rose-500 uppercase"
          >
            {" "}
            Workout
          </Text>
        </View>

        <View className="flex justify-center items-center mx-4">
          <Image
            source={require("../assets/images/avatar.png")}
            style={{ height: hp(6), width: wp(10) }}
            className="rounded-full"
          />

          <View className=" bg-neutral-200 flex my-2 border-[5px] rounded-full border-neutral-300">
            <Ionicons name="notifications" size={hp(3)} color="gray" />
          </View>
        </View>
      </View>

      {/*  image section  */}

      <View>
    {/* <ImageSlider/> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;
