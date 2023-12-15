import { useState } from 'react';
import { Form } from './SearchForm.styled'

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
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter search movie.."
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </Form>
  );
}
