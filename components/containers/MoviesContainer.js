import { Center, Container, Text, VStack } from "native-base";
import MovieCard from "../listedItems/ItemCard";
import Dropdown from "../forms/Dropdown";
import { useState } from "react";
import moviesApi from "../services/moviesApi";
import ItemList from "../lists/ItemList";
import Loading from "../layout/Loading";

const MoviesContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [dropDownValue, setDropDownValue] = useState("");

  const testArray = ["now_playing", "popular", "top_rated"];

  const fetchDataFromApi = async (passingValue) => {
    setDropDownValue(passingValue);
    console.log(passingValue);
    // setIsLoading(true);
    const pulledData = await moviesApi(passingValue);

    setMovieList(pulledData);
    // setIsLoading(false);

    return pulledData;
  };

  return (
    <Container>
      <Center>
        <Dropdown dropDownValues={testArray} fetchData={fetchDataFromApi} />
        {isLoading ? <Loading /> : <ItemList movieList={movieList} />}
      </Center>
    </Container>
  );
};

export default MoviesContainer;
