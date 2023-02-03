import { useState } from "react";
import { View, useWindowDimensions, Center } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import MoviesTvContainer from "../containers/MoviesTvContainer";
import SearchContainer from "../containers/MoviesTvContainer";

// const FirstRoute = () => (
//   <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
//     <MoviesTvContainer filters={moviesFilters} />
//   </View>
// );

// const SecondRoute = () => (
//   <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
//     <SearchContainer />
//   </View>
// );

// const ThirdRoute = () => (
//   <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
//     <SearchContainer />
//   </View>
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   third: ThirdRoute,
// });

export default function Tabs() {
  const moviesFilters = ["now_playing", "popular", "top_rated"];
  const tvFilters = ["on_the_air", "popular", "airing_today"];

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Movies" },
    { key: "second", title: "Search Results" },
    { key: "third", title: "TV Shows" },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case "first":
        return <MoviesTvContainer filters={tvFilters} jumpTo={jumpTo} />;
      case "second":
        return <SearchContainer jumpTo={jumpTo} />;
      case "third":
        return <MoviesTvContainer filters={moviesFilters} jumpTo={jumpTo} />;
    }
  };

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
