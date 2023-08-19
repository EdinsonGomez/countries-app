import List from "src/components/list/List";
import Filters from "src/components/filters/Filters";
import { getAllCountries } from "src/services/countries";

const Home = async () => {
  const countries = await getAllCountries();

  return (
    <List countriesList={countries} />
  )
}

export default Home;
