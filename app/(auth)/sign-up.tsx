import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, Text, View } from "react-native";

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", fullName: "" });
  const submit = async () => {
    try {
      if (!form?.email || !form?.password || !form?.fullName) {
        return Alert.alert(
          "Error",
          "Please Enter valid email/password/full name"
        );
      }
      setIsSubmitting(true);
      Alert.alert("Success", "User signed up successfully.");
    } catch (error: any) {
      Alert.alert("Error", error.message || "");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <View className="gap-10 bg-white rounded-lg">
      <CustomInput
        placeholder="Enter your full name"
        value={form.fullName}
        onChangeText={(text) => {
          setForm((prev) => ({ ...prev, fullName: text }));
        }}
        label="Full Name"
      />
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
      <CustomButton title="Sign Up" onPress={submit} isLoading={isSubmitting} />
      <View className="flex-row gap-2 justify-center mt-5">
        <Text className="base-regular text-gray-100">
          Already have an account ?
        </Text>
        <Link href="/sign-in" className="base-bold text-primary">
          Login
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
