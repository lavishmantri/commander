import React from 'react';
import styles from './suggestions.module.scss';

interface Suggestion {
  key: string;
  snippet: string;
}

interface SuggestionsProps {
  suggestions: Suggestion[];
  onSelect: (suggestion: Suggestion) => void;
}

export const Suggestions: React.FC<SuggestionsProps> = ({ suggestions, onSelect }) => {
  return (
    <ul className={styles.suggestions}>
      {suggestions.map(suggestion => (
        <li className={styles.suggestion} key={suggestion.key}>
          {suggestion.snippet}
        </li>
      ))}
    </ul>
  );
};
