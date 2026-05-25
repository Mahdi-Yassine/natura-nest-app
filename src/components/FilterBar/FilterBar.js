import React from 'react';
import './FilterBar.css';

const filters = [
  { label: 'All',             value: 'all'    },
  { label: 'Nut Butters',     value: 'butter' },
  { label: 'Natural Sweets',  value: 'sweet'  },
  { label: 'Snacks',          value: 'snack'  },
];

function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="nn-filter-bar py-3">
      <div className="container d-flex flex-wrap justify-content-center gap-2">
        {filters.map(f => (
          <button
            key={f.value}
            className={`btn-filter${activeFilter === f.value ? ' active' : ''}`}
            onClick={() => onFilterChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
