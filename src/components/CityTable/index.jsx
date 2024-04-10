import React from 'react';
import './city-table.css';

export default function CityTable({ cities }) {
  return (
    <table className='city-table'>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>City</th>
          <th>Related Name</th>
          <th>State</th>
          <th>Country</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cities?.map((city, cityIndex) => (
          <tr key={city.lat}>
            <td>{cityIndex + 1}</td>
            <td>{city.name}</td>
            <td>{city?.local_names?.en || '-'}</td>
            <td>{city.state}</td>
            <td>{city.country}</td>
            <td>
              <button>Get Weather Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
