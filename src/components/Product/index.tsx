import { Image, ImageProps, Text, TouchableOpacity, View } from "react-native";
import { forwardRef } from "react";
type ProductDataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
};

type ProductProps = {
  data: ProductDataProps;
};

export const Product = forwardRef<TouchableOpacity, ProductProps>(
  ({ data, ...rest }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        className="flex-row items-center w-full pb-4"
        {...rest}
      >
        <Image source={data.thumbnail} />
        <View className="flex-1 ml-3">
          <Text className="flex-1 text-base text-slate-100 font-subtitle">
            {data.title}
          </Text>
          <Text className="text-slate-400 text-xs leading-5 mt-0.5">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);
