// Filter.tsx
import React, { useState } from 'react';
import { ContentFilter } from './filterstyles'

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState<string>('');
  const DEBOUNCE_TIME = 300; // Tempo em milissegundos

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = e.target.value;
    setFilter(newFilter);

    // Adiciona debouncing para atrasar a chamada à função de filtro
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      onFilterChange(newFilter);
    }, DEBOUNCE_TIME);
  };

  let debounceTimer: ReturnType<typeof setTimeout>;

  return (
    <ContentFilter>
    <input
      type="text"
      placeholder="Filtrar por nome"
      value={filter}
      onChange={handleFilterChange}
      />
      </ContentFilter>
  );
};

export default Filter;
