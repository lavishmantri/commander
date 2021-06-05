/**
 * This component serves as a container interface for user search and relavent actions
 */

import React from 'react';
import { Input } from '../input/input';
import { Suggestions } from '../suggestions/suggestions';
import { getMatchingResponse } from '../../services/autocomplete';
import styles from './search.module.scss';

export const Search = () => {
  const [search, setSearch] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<any[]>([]);

  const handleOnChange = (val: string) => {
    setSearch(val);
    setSuggestions(getMatchingResponse(search));
  };

  const handleSuggestionSelect = () => {};

  const renderSuggestions = () =>
    suggestions.length ? (
      <Suggestions suggestions={suggestions} onSelect={handleSuggestionSelect} />
    ) : null;

  return (
    <div className={styles.search}>
      <Input value={search} onChange={handleOnChange} />
      {renderSuggestions()}
    </div>
  );
};
