import React from 'react';
import { Link } from 'wouter';

export default function HeaderItems({ name }) {
  return (
    <option value={name}>
      {name}
    </option>
  )
}