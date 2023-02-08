import React from 'react';
import { Search } from '../../components';
import { ListAllCharacters, ListCharactersByName } from './index';
export const Characters = () => {
  const [term, setTerm] = React.useState<string | null>(null);

  return (
    <div>
      <Search callback={setTerm} />
      {term ? <ListCharactersByName term={term} /> : <ListAllCharacters />}
    </div>
  );
};
