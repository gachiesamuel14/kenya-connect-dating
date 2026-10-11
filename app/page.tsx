export default function Home() {
  return (
    <div>
      <section style={{ textAlign: 'center', padding: '3rem 0' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
          Find Your Match in Kenya 💛
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Location-based dating for Nairobi, Mombasa, Kisumu, Kiambu and beyond. 
          Connect with people nearby based on county, interests, lifestyle, and more.
        </p>
        <a href="/matches" className="btn">See Who's Nearby</a>
      </section>

      <div className="grid">
        <div className="card">
          <h3>📍 Location Matching</h3>
          <p>Discover people in your county or within a set distance. Perfect for Nairobi CBD, Westlands, Mombasa Island, etc.</p>
        </div>
        <div className="card">
          <h3>🎯 Smart Filters</h3>
          <p>Filter by age, tribe, religion, interests, student/professional/church mode, and Sheng vibes.</p>
        </div>
        <div className="card">
          <h3>🔒 Safe & Local</h3>
          <p>Report system, verification options, and M-Pesa ready for premium features. Built for Kenya.</p>
        </div>
      </div>

      <section style={{ marginTop: '3rem' }}>
        <h2>How it works</h2>
        <ol style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
          <li>Create your profile with photos, bio, and interests</li>
          <li>Allow location access (or select your county)</li>
          <li>Swipe / like nearby matches</li>
          <li>Chat in real-time when you match</li>
        </ol>
      </section>
    </div>
  );
}
