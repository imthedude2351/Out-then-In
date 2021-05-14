import './LocationList.css';
import LocationListItem from '../LocationListItem/LocationListItem';

export default function LocationList({ locations }) {
  const locations = locations.map(location =>
    <LocationListItem
      key={location._id}
      location={location}
    />
  );
  return (
    <main className="LocationList">
      {locations}
    </main>
  );
}