import * as React from 'react';
import { Button, DataTable } from 'react-native-paper';

const TableOfData = () => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4,5,6,7,8,9,10]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items, setItems] = React.useState<{name: string; country: string}[]>([]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  const fetchUniData = () => {
     const rawData = fetch(`http://universities.hipolabs.com/search?country=United+States&offset=${page * itemsPerPage}&limit=${itemsPerPage}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((response) => {
            // console.log("raw response =", response);
            return response.json()})
        .then(
            json => {
                // console.log("json response =", json);
                setItems(json);
            }
        );
  }

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  React.useEffect(() => {
    fetchUniData()
  }, [page]);

    //   http://universities.hipolabs.com/search?country=United+States&offset=1&limit=5 useful open source testing for pagination

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>University name</DataTable.Title>
        <DataTable.Title numeric>Country</DataTable.Title>
        {/* <DataTable.Title numeric>Fat</DataTable.Title> */}
      </DataTable.Header>

      {items.map((item, index) => (
        <DataTable.Row key={index}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.country}</DataTable.Cell>
          {/* <DataTable.Cell numeric>{item.fat}</DataTable.Cell> */}
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        // numberOfPages={Math.ceil(items.length / itemsPerPage) + 1}
        numberOfPages={10}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
      {/* <Button onPress={fetchUniData}>Fetch data</Button> */}
    </DataTable>
  );
};

export default TableOfData;