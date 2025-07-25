import { Link } from 'react-router-dom'
import { ArrowRight, Users, BookOpen, Award, Calendar, MessageSquare, Target, Heart } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-50 to-emerald-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering <span className="gradient-text">Islamic Education</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The Islamic Schools Association is dedicated to supporting and advancing Islamic education 
              across New York and beyond, fostering academic excellence rooted in Islamic values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/membership"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
              >
                Become a Member
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/member-schools"
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                View Member Schools
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Member Schools</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">15,000+</h3>
                <p className="text-gray-600">Students Served</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">25</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to fostering excellence in Islamic education while building strong communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary-50 rounded-lg p-8">
              <Target className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To support, strengthen, and advance Islamic schools by providing resources, 
                professional development, advocacy, and a collaborative network that ensures 
                our students receive the highest quality education rooted in Islamic values 
                and academic excellence.
              </p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-8">
              <Heart className="h-12 w-12 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the leading organization that empowers Islamic schools to nurture 
                confident, knowledgeable, and compassionate Muslim leaders who contribute 
                positively to their communities and society while maintaining strong 
                Islamic identity and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support for Islamic schools and educators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <BookOpen className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Curriculum Support</h3>
              <p className="text-gray-600 mb-4">
                Access to Islamic curriculum resources, teaching materials, and educational frameworks.
              </p>
              <Link to="/about" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Users className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Development</h3>
              <p className="text-gray-600 mb-4">
                Training programs, workshops, and conferences for educators and administrators.
              </p>
              <Link to="/about" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <MessageSquare className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Networking & Advocacy</h3>
              <p className="text-gray-600 mb-4">
                Connect with other schools and advocate for Islamic education at all levels.
              </p>
              <Link to="/about" className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Updates
              </h2>
              <p className="text-xl text-gray-600">
                Stay informed with our latest news and insights
              </p>
            </div>
            <Link
              to="/blog"
              className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
            >
              View All Posts <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <article key={i} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary-400 to-emerald-400"></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    December {i + 10}, 2024
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Excellence in Islamic Education: Best Practices
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover the latest methodologies and approaches that are transforming Islamic education...
                  </p>
                  <Link
                    to="/blog"
                    className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
                  >
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Become part of a network dedicated to advancing Islamic education and supporting our students' success.
          </p>
          <Link
            to="/membership"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Apply for Membership
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
