import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../constants";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Registration = () => {
  const navigation = useNavigation();

  const [data, setData] = useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <View
            style={{
              width: "90%",
            }}
          >
            <Image
              source={require("../assets/icon.png")}
              style={{
                width: "100%",
                height: 250,
                resizeMode: "contain",
                marginTop: -20,
              }}
            />
          </View>

          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.extraLarge,
              color: COLORS.black,
              marginTop: -20,
            }}
          >
            Let's get started!
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.font,
              color: COLORS.gray,
            }}
          >
            Create an account to continue
          </Text>
          <View style={{ marginTop: SIZES.font, marginTop: 40 }}>
            <View
              style={{
                width: "100%",
                borderRadius: SIZES.font,
                backgroundColor: COLORS.input,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.small - 2,
              }}
            >
              <Feather
                name="user"
                size={24}
                style={{ marginRight: SIZES.base, color: COLORS.gray }}
              />
              <TextInput
                placeholder="Full name"
                style={{
                  flex: 1,
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.font,
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: SIZES.font, marginTop: 20 }}>
            <View
              style={{
                width: "100%",
                borderRadius: SIZES.font,
                backgroundColor: COLORS.input,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.small - 2,
              }}
            >
              <Feather
                name="phone"
                size={24}
                style={{ marginRight: SIZES.base, color: COLORS.gray }}
              />
              <TextInput
                placeholder="Phone Number"
                style={{
                  flex: 1,
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.font,
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: SIZES.font, marginTop: 20 }}>
            <View
              style={{
                width: "100%",
                borderRadius: SIZES.font,
                backgroundColor: COLORS.input,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.small - 2,
              }}
            >
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                style={{ marginRight: SIZES.base, color: COLORS.gray }}
              />
              <TextInput
                placeholder="Email"
                style={{
                  flex: 1,
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.font,
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: SIZES.font, marginTop: 20 }}>
            <View
              style={{
                width: "100%",
                borderRadius: SIZES.font,
                backgroundColor: COLORS.input,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.small - 2,
              }}
            >
              <MaterialCommunityIcons
                name="account-lock-outline"
                size={24}
                style={{ marginRight: SIZES.base, color: COLORS.gray }}
              />
              <TextInput
                placeholder="Password"
                style={{
                  flex: 1,
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.font,
                }}
                secureTextEntry={data.secureTextEntry ? true : false}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginTop: SIZES.font, marginTop: 20 }}>
            <View
              style={{
                width: "100%",
                borderRadius: SIZES.font,
                backgroundColor: COLORS.input,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.small - 2,
              }}
            >
              <MaterialCommunityIcons
                name="account-lock-outline"
                size={24}
                style={{ marginRight: SIZES.base, color: COLORS.gray }}
              />
              <TextInput
                placeholder="Confirm Password"
                style={{
                  flex: 1,
                  fontFamily: FONTS.regular,
                  fontSize: SIZES.font,
                }}
                secureTextEntry={data.secureTextEntry ? true : false}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={{ width: "100%" }}>
            <View
              style={{
                backgroundColor: COLORS.primary,
                borderRadius: 8,
                paddingHorizontal: 15,
                paddingVertical: 10,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text style={{ color: COLORS.white, fontFamily: FONTS.medium }}>
                Sign Up
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.black,
                width: 100,
                height: 2,
              }}
            />
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.font,
                color: COLORS.black,
              }}
            >
              {" "}
              or sign up with{" "}
            </Text>
            <View
              style={{
                backgroundColor: COLORS.black,
                width: 100,
                height: 2,
              }}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={{ width: "40%", marginRight: 20 }}>
              <View
                style={{
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                  borderWidth: 1,
                  borderColor: COLORS.gray,
                  flexDirection: "row",
                }}
              >
                {/* <MaterialCommunityIcons name="google" size={18} style={{color:COLORS.gray, marginRight:5}} /> */}
                <Text style={{ color: COLORS.gray, fontFamily: FONTS.medium }}>
                  Google
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: "40%", marginRLeft: 20 }}>
              <View
                style={{
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                  borderWidth: 1,
                  borderColor: COLORS.gray,
                  flexDirection: "row",
                }}
              >
                {/* <MaterialCommunityIcons name="facebook" size={20} style={{color:COLORS.gray, marginRight:5}} /> */}
                <Text style={{ color: COLORS.gray, fontFamily: FONTS.medium }}>
                  Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{ marginTop: 30, flexDirection: "row", marginBottom: 20 }}
          >
            <Text
              style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.font,
                color: COLORS.black,
              }}
            >
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontFamily: FONTS.medium,
                  fontSize: SIZES.font,
                  color: COLORS.primary,
                  marginLeft: 5,
                }}
              >
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
