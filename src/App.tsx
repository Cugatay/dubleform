import { useState } from 'react';
import { BulletList, Filter, ListItem, TagFilter } from './lib';

const addedFeatures = [
  { feature: 'Instant Messaging', added: 'Today' },
  { feature: 'Like Photo', added: 'This Week' },
];

export default function App() {
  const [filteredData, setFilteredData] = useState(addedFeatures);

  return (
    <div className='App'>
      <Filter
        data={addedFeatures}
        filters={[
          { name: 'Today', condition: (item) => item.added === 'Today' },
          { name: 'This Week', condition: (item) => item.added === 'This Week' },
        ]}
        setFilteredData={setFilteredData}
        FilterElement={TagFilter}
      />

      <BulletList>
        {filteredData.map((item, index) => (
          <ListItem title={item.feature} key={index}>
            Date Added: {item.added}
          </ListItem>
        ))}
      </BulletList>
    </div>
  );
}
