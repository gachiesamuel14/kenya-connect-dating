'use client';

import { useState } from 'react';

const mockUsers = [
  {
    id: 1,
    name: 'Amina',
    age: 25,
    county: 'Nairobi',
    distance: '2.3 km',
    bio: 'Love hiking in Ngong Hills and good coffee in Westlands. Looking for genuine connection.',
    interests: ['Hiking', 'Coffee', 'Travel'],
    tribe: 'Kikuyu',
  },
  {
    id: 2,
    name: 'Brian',
    age: 28,
    county: 'Kiambu',
    distance: '8.1 km',
    bio: 'Tech guy by day, chapati enthusiast by night. Student mode activated.',
    interests: ['Tech', 'Food', 'Music'],
    tribe: 'Luo',
  },
  {
    id: 3,
    name: 'Grace',
    age: 23,
    county: 'Mombasa',
    distance: '450 km',
    bio: 'Beach vibes and church every Sunday. Open to professional connections too.',
    interests: ['Beach', 'Church', 'Cooking'],
    tribe: 'Mijikenda',
  },
  {
    id: 4,
    name: 'Kevin',
    age: 30,
    county: 'Kisumu',
    distance: '320 km',
    bio: 'Lake life, fish and good conversations. Sheng speaker.',
    interests: ['Fishing', 'Sports', 'Sheng'],
    tribe: 'Luo',
  },
];

export default function Matches() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' 
    ? mockUsers 
    : mockUsers.filter(u => u.county.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>People Nearby & Across Kenya</h1>
      <p style={{ marginBottom: '1.5rem' }}>Demo mode — location simulation. In production this uses GPS + county filters.</p>
      
      <div style={{ marginBottom: '1.5rem' }}>
        <label>Filter by county: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Counties</option>
          <option value="nairobi">Nairobi</option>
          <option value="mombasa">Mombasa</option>
          <option value="kisumu">Kisumu</option>
          <option value="kiambu">Kiambu</option>
        </select>
      </div>

      <div className="grid">
        {filtered.map(user => (
          <div key={user.id} className="card">
            <h3>{user.name}, {user.age}</h3>
            <p><strong>{user.county}</strong> · {user.distance}</p>
            <p style={{ margin: '0.5rem 0' }}>{user.bio}</p>
            <p><small>Interests: {user.interests.join(', ')}</small></p>
            <p><small>Tribe: {user.tribe}</small></p>
            <div style={{ marginTop: '1rem' }}>
              <button className="btn" style={{ marginRight: '0.5rem' }}>Like</button>
              <button className="btn" style={{ background: '#666' }}>Pass</button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && <p>No matches in this filter yet. Try another county!</p>}
    </div>
  );
}
