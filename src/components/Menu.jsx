
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

import './Menu.css'
const Menu = () => {
  const [endData, setEndData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
      .then(res => res.json())
      .then(data => {
        setEndData(data);
      });
  }, []);

  const searchChange = (event) => {
    setSearchData(event.target.value);
  };

  const departmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const filterData = endData.filter((e) =>
    e.name.toLowerCase().includes(searchData.toLowerCase()) &&
    (department === '' || e.department.toLowerCase() === department.toLowerCase())
  );

  const departments = [...new Set(endData.map((e) => e.department))];

  return (
    <div className='main'>
      <div className='search'>
        <label>Search according to "Name": </label>
        <input type="text" value={searchData} onChange={searchChange}/>
      </div>
      <div className='select'>
        <label>Select type of Department: </label>
        <select value={department} onChange={departmentChange}>
          <option value="">All Departments</option>
          {departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      </div>
      <div className='data'>
        {filterData.map((e) => (
          <ul key={e.id}>
            <li>
              <p>Name:
                <span> {e.name}</span>
              </p>
              <p>Department: 
                <span> {e.department}</span>
                </p>
              <p>Role: 
                <span> {e.role}</span>
                </p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Menu;
