import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MaterialTable from 'material-table';

const BeerList = () => {
  const [data, setData] = useState([]);
  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Tagline', field: 'tagline' },
    { title: 'First_brewed', field: 'first_brewed' },
    { title: 'Abv', field: 'abv' },
  ];

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  return (
    <Wrapper>
      <MaterialTable title="Beer List" data={data} columns={columns} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 7rem;
`;

export default BeerList;
