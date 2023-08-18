import List from 'src/components/list/List';
import { getCountriesByName } from '../../../services/countries';

const SearchByNamePage = async ({ params }) => {
  const { name } = params;
  const countries = await getCountriesByName(name);

  return (
    <List countriesList={countries} />
  )
}

export default SearchByNamePage;