import './LocationListItem.css';

export default function LocationListItem({ location }) {
    return (
        <div className="LocationListItem">
            <div className="address">{location.address}</div>
            <div>{location.city}</div>
            <div>{location.state}</div>
        </div>
    )
}