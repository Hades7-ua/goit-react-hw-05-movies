import { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(search);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter search movie.."
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
