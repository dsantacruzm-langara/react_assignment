import { Center, Container, Text, VStack } from "native-base";
import Dropdown from "../forms/Dropdown";
import { useState } from "react";
import moviesApi from "../services/moviesApi";
import ItemList from "../lists/ItemList";
import Loading from "../layout/Loading";

const MoviesTvContainer = ({filters}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [dropDownValue, setDropDownValue] = useState("");

  const fetchDataFromApi = async (passingValue) => {
    console.log(passingValue);
    setDropDownValue(passingValue);
    setIsLoading(true);
    const pulledData = await moviesApi(passingValue);
    setMovieList(pulledData);
    setIsLoading(false);

    console.log(movieList);

    return pulledData;
  };

  return (
    <Container>
      <Center>
        <Dropdown dropDownValues={filters} fetchData={fetchDataFromApi} />
        {isLoading ? <Loading /> : <ItemList movieList={movieList} />}
      </Center>
    </Container>
  );
};

export default MoviesTvContainer;
