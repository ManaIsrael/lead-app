import { useEffect, useState } from 'react';
import axios from 'axios';
import LeadForm from '../components/LeadForm';
import LeadList from '../components/LeadList';

export default function Home() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/leads').then(res => setLeads(res.data));
  }, []);

  const addLead = lead => {
    setLeads([lead, ...leads]);
  };

  return (
    <div>
      <h1>Lead Management App</h1>
      <LeadForm onAdd={addLead} />
      <LeadList leads={leads} />
    </div>
  );
}
