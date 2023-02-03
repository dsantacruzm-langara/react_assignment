import { FlatList } from "native-base";
import ItemCard from "../listedItems/ItemCard";

const ItemList = ({ movieList }) => {
  return (
    <FlatList
      data={movieList.results}
      renderItem={({ item }) => (
        <ItemCard
          title={item.title}
          popularity={item.popularity}
          releaseDate={item.release_date}
        />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ItemList;
