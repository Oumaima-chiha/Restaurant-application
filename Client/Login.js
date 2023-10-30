import React from 'react';
import { View, Image, Text, useWindowDimensions, StyleSheet } from 'react-native';
import { FontSize, FontFamily, Color, Border, Padding } from './GlobalStyles';

const Login = () => {
  const windowDimensions = useWindowDimensions();
  const isSmallScreen = windowDimensions.width <= 375;

  const loginWrapperStyle = isSmallScreen
    ? [
        styles.loginWrapper,
        { width: windowDimensions.width - 40, paddingHorizontal: 10 },
      ]
    : styles.loginWrapper;

  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <Image style={styles.loginItem} resizeMode="cover" />

      <View style={loginWrapperStyle}>
        <Text style={[styles.login1, styles.login1FlexBox]}>Login</Text>
      </View>

      <View style={styles.dontHaveAnAccountParent}>
        <Text style={[styles.dontHaveAn, styles.emailTypo]}>Don’t have an account?</Text>
        <Text style={[styles.register, styles.registerFlexBox]}>Register</Text>
      </View>

      <View style={styles.loginParent}>
        <Text style={[styles.login2, styles.loginTypo]}>Login</Text>
        <Text style={[styles.createAnAccountContainer, styles.registerFlexBox]}>
          <Text style={styles.createAn}>{`Create an `}</Text>
          <Text style={[styles.account, styles.loginTypo]}>account</Text>
          <Text style={styles.toAccessAllTheFeaturesOf}>
            <Text style={styles.toAccessAll}>{` to access all the features of `}</Text>
            <Text style={styles.loginTypo}>Maxpense!</Text>
          </Text>
        </Text>
      </View>

      <View style={[styles.emailParent, styles.parentPosition]}>
        <Text style={[styles.email, styles.emailLayout]}>Email</Text>
        <View style={[styles.vectorParent, styles.parentBorder]}>
          <Image style={styles.vectorIcon} resizeMode="cover" />
          <Text style={[styles.exAbcexamplecom, styles.emailLayout]}>Ex: abc@example.com</Text>
        </View>
      </View>

      <Text style={[styles.forgotPassword, styles.registerText]}>Forgot Password?</Text>

      <View style={[styles.yourPasswordParent, styles.parentPosition]}>
        <Text style={[styles.email, styles.emailLayout]}>Your Password</Text>
        <View style={[styles.groupParent, styles.parentBorder]}>
          <Image style={styles.frameChild} resizeMode="cover" />
          <Image style={styles.frameItem} resizeMode="cover" />
        </View>
      </View>

      <Image style={styles.loginInner} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
  loginWrapper: {
    top: 516,
    backgroundColor: Color.colorRed,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: Padding.p_base,
    alignItems: 'center',
    width: '90%', // Use a percentage of the screen width
    borderRadius: Border.br_base,
    flexDirection: 'row',
    left: '5%', // Center it horizontally
    position: 'absolute',
  },
  login1FlexBox: {
    textAlign: "center",
    lineHeight: 40,
  },
  emailTypo: {
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
  },
  registerFlexBox: {
    display: "flex",
    textAlign: "left",
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
    alignItems: "center",
  },
  loginTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  parentPosition: {
    left: 20,
    position: "absolute",
  },
  emailLayout: {
    lineHeight: 24,
    textAlign: "left",
  },
  parentBorder: {
    marginTop: 6,
    borderWidth: 1.5,
    borderColor: Color.colorTomato,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    width: 343,
    borderRadius: Border.br_base,
  },
  registerText: {
    textDecoration: "underline",
    color: Color.colorTomato,
  },
  loginChild: {
    top: 0,
    left: -3,
    borderTopRightRadius: 14,
    width: 396,
    height: 856,
    position: "absolute",
    backgroundColor: Color.colorBlack,
  },
  loginItem: {
    top: 435,
    left: -4,
    width: 397,
    height: 421,
    position: "absolute",
  },
  login1: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
  },
  loginWrapper: {
    top: 516,
    backgroundColor: Color.colorRed,
    justifyContent: "center",
    paddingHorizontal: 138,
    paddingVertical: Padding.p_base,
    alignItems: "center",
    width: 343,
    borderRadius: Border.br_base,
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  dontHaveAn: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  register: {
    width: 69,
    marginLeft: 6,
    color: Color.colorTomato,
    textDecoration: "underline",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  dontHaveAnAccountParent: {
    top: 598,
    left: 71,
    flexDirection: "row",
    position: "absolute",
  },
  login2: {
    fontSize: 32,
    letterSpacing: -0.4,
    color: Color.colorRed,
    textAlign: "left",
    lineHeight: 30,
  },
  createAn: {
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  account: {
    color: Color.colorTomato,
  },
  toAccessAll: {
    fontFamily: FontFamily.interRegular,
  },
  toAccessAllTheFeaturesOf: {
    color: Color.colorWhite,
  },
  createAnAccountContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  createAnAccountContainer: {
    width: 286,
    marginTop: 19,
  },
  loginParent: {
    top: 79,
    left: 23,
    position: "absolute",
  },
  email: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
  },
  vectorIcon: {
    width: 19,
    height: 19,
  },
  exAbcexamplecom: {
    fontStyle: "italic",
    fontFamily: FontFamily.interLight,
    color: "#c8c8c8",
    marginLeft: 15,
    textAlign: "left",
    letterSpacing: -0.2,
    fontSize: FontSize.size_base,
  },
  vectorParent: {
    paddingHorizontal: 20,
    paddingVertical: Padding.p_base,
  },
  emailParent: {
    top: 225,
  },
  forgotPassword: {
    top: 432,
    left: 29,
    fontSize: 12,
    letterSpacing: -0.1,
    color: Color.colorTomato,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    lineHeight: 24,
    position: "absolute",
  },
  frameChild: {
    width: 18,
    height: 21,
  },
  frameItem: {
    width: 61,
    height: 6,
    marginLeft: 17,
  },
  groupParent: {
    paddingHorizontal: 22,
    paddingVertical: 18,
  },
  yourPasswordParent: {
    top: 343,
  },
  loginInner: {
    top: 14,
    left: 16,
    width: 33,
    height: 33,
    position: "absolute",
  },
  login: {
    flex: 1,
    height: 844,
    width: "100%",
    backgroundColor: Color.colorBlack,
  },
});

export default Login;
