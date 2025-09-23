export default function LeadList({ leads }) {
  return (
    <ul>
      {leads.map(lead => (
        <li key={lead._id}>
          <strong>{lead.name}</strong> - {lead.email} - {lead.status}
        </li>
      ))}
    </ul>
  );
}
