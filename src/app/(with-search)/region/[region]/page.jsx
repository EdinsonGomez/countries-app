import { getCountriesByRegion } from 'src/services/countries';
import List from 'src/components/list/List';
import styles from "src/styles/loading.module.css";

const SingleRegionPage = async ({ params }) => {
  const { region } = params;
  const countries = await getCountriesByRegion(region);

  return (
    <List countriesList={countries} />
  )
}

export default SingleRegionPage;