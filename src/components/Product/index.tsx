import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { forwardRef } from "react";
type ProductDataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
  quantity?: number;
};

type ProductProps = TouchableOpacityProps & {
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
          <View className="flex-row items-center">
            <Text className="flex-1 text-base text-slate-100 font-subtitle">
              {data.title}
            </Text>

            {data.quantity && <Text className="text-slate-400 font-subtitle text-sm">x {data.quantity}</Text>}

          </View>
          <Text className="text-slate-400 text-xs leading-5 mt-0.5">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
);
