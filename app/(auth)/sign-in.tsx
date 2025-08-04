import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { setUser } from "../../services/slices/appSlice";
import { useUserLoginMutation } from "@/services/slices/userSlice";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const dispatch = useDispatch();
  const submit = async () => {
    try {
      if (!form?.email || !form?.password) {
        return Alert.alert("Error", "Please Enter valid email/password");
      }
      const userData = await userLogin({ email: form?.email, password: form?.password }).unwrap();
      dispatch(setUser(userData));
      Toast.show({
        type: "success",
        text1: "Login",
        text2: "Logedin successfully",
      });
      // Redirect to home
      router.replace("/");
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Authentication Error",
        text2: error?.data?.message || "Please try again.",
      });
    }
  };
  return (
    <View className="gap-10 bg-white rounded-lg">
      <CustomInput
        placeholder="Enter your email"
        value={form.email}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, email: text }));
        }}
        keyboardType="email-address"
        label="Email"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, password: text }));
        }}
        label="Password"
        secureTextEntry={true}
      />
      <CustomButton title="Sign In" onPress={submit} isLoading={isLoading} />
      <View className="flex-row gap-2 justify-center mt-5">
        <Text className="base-regular text-gray-100">
          Don&apos;t have an account ?
        </Text>
        <Link href="/sign-up" className="base-bold text-primary">
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
