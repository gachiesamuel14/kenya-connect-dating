'use client';

import { useState } from 'react';

export default function Profile() {
  const [form, setForm] = useState({
    name: '',
    age: '',
    county: 'Nairobi',
    bio: '',
    interests: '',
    tribe: '',
    mode: 'professional',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Profile saved (demo)! In production this goes to the database + photo upload.');
    console.log(form);
  };

  return (
    <div>
      <h1>Create / Edit Profile</h1>
      <form onSubmit={handleSubmit} className="card" style={{ maxWidth: '600px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name</label><br />
          <input name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Age</label><br />
          <input type="number" name="age" value={form.age} onChange={handleChange} required style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>County</label><br />
          <select name="county" value={form.county} onChange={handleChange} style={{ width: '100%', padding: '0.5rem' }}>
            <option>Nairobi</option>
            <option>Mombasa</option>
            <option>Kisumu</option>
            <option>Kiambu</option>
            <option>Nakuru</option>
            <option>Eldoret</option>
          </select>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Bio</label><br />
          <textarea name="bio" value={form.bio} onChange={handleChange} rows={3} style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Interests (comma separated)</label><br />
          <input name="interests" value={form.interests} onChange={handleChange} placeholder="hiking, coffee, tech" style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Tribe (optional)</label><br />
          <input name="tribe" value={form.tribe} onChange={handleChange} style={{ width: '100%', padding: '0.5rem' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Mode</label><br />
          <select name="mode" value={form.mode} onChange={handleChange} style={{ width: '100%', padding: '0.5rem' }}>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="church">Church</option>
          </select>
        </div>
        <button type="submit" className="btn">Save Profile</button>
      </form>
    </div>
  );
}
