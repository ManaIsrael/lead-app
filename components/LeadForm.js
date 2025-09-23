import { useState } from 'react';
import axios from 'axios';

export default function LeadForm({ onAdd }) {
  const [form, setForm] = useState({ name: '', email: '', status: 'New' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/leads', form);
      onAdd(res.data);
      setForm({ name: '', email: '', status: 'New' });
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <select name="status" value={form.status} onChange={handleChange}>
        {['New', 'Engaged', 'Proposal Sent', 'Closed-Won', 'Closed-Lost'].map(s => (
          <option key={s}>{s}</option>
        ))}
      </select>
      <button type="submit">Add Lead</button>
    </form>
  );
}
