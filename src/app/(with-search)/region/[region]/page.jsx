import { getCountriesByRegion } from 'src/services/countries';
import List from 'src/components/list/List';

const SingleRegionPage = async ({ params }) => {
  const { region } = params;
  const countries = await getCountriesByRegion(region);

  return (
    <List countriesList={countries} />
  )
}

export default SingleRegionPage;