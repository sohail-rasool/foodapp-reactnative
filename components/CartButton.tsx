import { images } from "@/constants";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CartButton = () => {
  const totalItems = 0;
  return (
    <TouchableOpacity className="cart-btn" onPress={() => {}}>
      <Image source={images.bag} className="size-5" resizeMode="contain" />
      {totalItems > 0 && (
        <View className="small-bold text-white">
          <Text>{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton;
