import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from 'tailwindcss/colors';
type HeaderProps = {
  title: string
  cardQuantity?: number
}

export function Header({title, cardQuantity = 0}: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image className="h-6 w-32" source={require("@/assets/logo.png")} />
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      {cardQuantity > 0 && (
        <TouchableOpacity className="relative" activeOpacity={0.7}>
        <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
          <Text className="text-slate-900 font-bold text-xs">{cardQuantity}</Text>
        </View>
  
        <Feather name="shopping-bag" color={colors.white} size={24}/>
        </TouchableOpacity>
      )}
    </View>
  )
}