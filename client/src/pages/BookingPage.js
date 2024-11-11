import BusList from "../components/BusList";
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
  // if (searchResults) {
  //   searchResults.map((item) => {
  //     console.log("Schedule ID:", item.schedule._id);
  //     console.log("Departure Date:", item.schedule.departure_date);
  //     console.log("Departure Time:", item.schedule.departure_time);
  //     console.log("Arrival Time:", item.schedule.arrival_time);
  //     console.log("Available Seats:", item.schedule.available_seats);
  //     console.log("Total Distance:", item.schedule.total_distance);
  //     console.log("Bus Number:", item.bus.bus_number);
  //     console.log("Bus Name:", item.bus.bus_name);
  //     console.log("Bus Type:", item.bus.bus_type);
  // //   });

  //   console.log(searchResults);
  // }
  return (
    <div>
      <SearchBus searchBusses={searchBusses} />
      {searchLoading && <p>Loading search results...</p>}
      {searchResults && (
        <div>
          <h3>Available Buses</h3>
          <ul>
            {searchResults.map((bus) => (
              <BusList items={bus} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
