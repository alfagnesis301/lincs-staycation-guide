export default function LincsStaycationBadge() {
  return (
    <div style={{
      maxWidth: '220px',
      border: '1px solid #0f766e',
      borderRadius: '8px',
      padding: '12px',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      backgroundColor: '#fafafa',
    }}>
      <p style={{
        margin: '0 0 8px 0',
        fontSize: '11px',
        color: '#64748b',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '0.5px',
      }}>Recommended on</p>
      <a
        href="https://lincs-staycation-guide.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: '#0f766e',
          fontWeight: 'bold',
          fontSize: '14px',
        }}
      >
        Lincs <span style={{ fontStyle: 'italic', color: '#1e3a8a' }}>Staycation</span> Guide
      </a>
      <p style={{
        margin: '6px 0 0 0',
        fontSize: '12px',
        color: '#334155',
      }}>Independent Guide to Lincolnshire</p>
    </div>
  );
}
