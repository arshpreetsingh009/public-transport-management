import DropDown from "../components/DropDown";
import { useFetchLocationsQuery } from "../store/api/locationApi";

const BookingPage = () => {
  const { data, isFetching } = useFetchLocationsQuery();
  if (!isFetching) {
    console.log(isFetching);
    console.log(data.locations[0].places);
  }
  return (
    <div>
      {isFetching ? (
        <div></div>
      ) : (
        <div className="w-full h-[500px] flex bg-green-800">
          <div className="flex p-[250px]">
            <div className="flex">
              <DropDown locations={data.locations[0].places} />
              <DropDown locations={data.locations[0].places} />
            </div>
            <div>
              <button className="h-8 w-32 bg-blue-800"> search </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingPage;
