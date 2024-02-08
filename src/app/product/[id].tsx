import { Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Button } from "@/components/Button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/LInkButton";
import { useCartStore } from "@/stores/card-store";

export default function Product() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const cartStore = useCartStore();

  const product = PRODUCTS.filter((item) => item.id === id)[0];
  console.log(cartStore.products);
  function handleAddToCard() {
    cartStore.add(product);
    navigation.goBack();
  }

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="flex-1 p-5 mt-8">
        <Text className="my-2 text-2xl text-lime-400 font-heading">
          {formatCurrency(product.price)}
        </Text>

        <Text className="mb-6 text-base leading-6 text-slate-400 font-body">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            className="text-base leading-6 text-slate-400 font-body"
          >
            {"\u2022"} {ingredient}
          </Text>
        ))}
      </View>
      <View className="gap-5 p-5 pb-8">
        <Button onPress={handleAddToCard}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>
        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  );
}
