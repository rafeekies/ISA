import { Users, BookOpen, Award } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            Empowering <span className="gradient-text">Islamic Education</span>
          </h1>
          <p className="hero-subtitle">
            The Islamic Schools Association is dedicated to supporting and advancing Islamic education 
            across New York and beyond, fostering academic excellence rooted in Islamic values.
          </p>
          <div className="hero-buttons">
            <a href="/membership" className="btn btn-primary">
              Become a Member
            </a>
            <a href="/schools" className="btn btn-secondary">
              View Schools
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            <div className="card card-center">
              <Users size={48} color="#2563eb" className="card-icon" />
              <h3 className="card-title">50+</h3>
              <p className="card-text">Member Schools</p>
            </div>
            <div className="card card-center">
              <BookOpen size={48} color="#10b981" className="card-icon" />
              <h3 className="card-title">15,000+</h3>
              <p className="card-text">Students Served</p>
            </div>
            <div className="card card-center">
              <Award size={48} color="#2563eb" className="card-icon" />
              <h3 className="card-title">25</h3>
              <p className="card-text">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">
            Dedicated to fostering excellence in Islamic education while building strong communities
          </p>
          <div className="grid grid-1" style={{ maxWidth: '48rem', margin: '0 auto' }}>
            <div className="card">
              <p style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#4b5563' }}>
                To support, strengthen, and advance Islamic schools by providing comprehensive 
                resources, professional development opportunities, advocacy, and a collaborative 
                network that ensures our students receive the highest quality education rooted 
                in Islamic values and academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
