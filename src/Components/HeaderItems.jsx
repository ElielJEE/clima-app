import React from 'react';

export default function HeaderItems({ name }) {
  return (
    <option value={name}>
      {name}
    </option>
  )
}