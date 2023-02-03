import { useState } from "react";
import { View, useWindowDimensions, Center } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import MoviesContainer from "../containers/MoviesContainer";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
    <MoviesContainer />
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#FFFFFF" }} />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#FFFFFF" }} />
);

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   third: ThirdRoute,
// });

const renderScene = ({ route, jumpTo }) => {
  switch (route.key) {
    case "first":
      return <MoviesContainer jumpTo={jumpTo} />;
    case "second":
      return <MoviesContainer jumpTo={jumpTo} />;
    case "third":
      return <MoviesContainer jumpTo={jumpTo} />;
  }
};

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Movies" },
    { key: "second", title: "Search Results" },
    { key: "third", title: "TV Shows" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      style={{ backgroundColor: "#FFFFFF" }}
    />
  );
}
