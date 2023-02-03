import Header from "../layout/Header";
import Tabs from "../layout/Tabs";

const IndexScreen = ({ navigation }) => {
  return (
    <VStack space={4} alignItems="center">
      <Header />
      <Tabs />
    </VStack>
  );
};

export default IndexScreen;
