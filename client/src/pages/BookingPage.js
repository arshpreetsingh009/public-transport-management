import SearchBus from "../components/SearchBus";
import { useLazySearchBussesQuery } from "../store/api/bussesApi";

const BookingPage = () => {
  const [triggerSearch, { data: searchResults, isLoading: searchLoading }] =
    useLazySearchBussesQuery();
  const searchBusses = (data) => {
    console.log("clicked");
    console.log(data);
    if (data.pickup && data.drop) {
      console.log("clicked");
      triggerSearch(data);
    }
  };
  if (!searchLoading) {
    console.log(searchResults);
  }
  return (
    <div>
      <SearchBus searchBusses={searchBusses} />
    </div>
  );
};

export default BookingPage;
