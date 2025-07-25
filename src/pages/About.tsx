import { Target, Heart, Users, BookOpen, Award, Clock } from 'lucide-react'

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About the Islamic Schools Association
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established in 1999, we have been at the forefront of supporting and advancing 
              Islamic education across New York and beyond for over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  The Islamic Schools Association was founded in 1999 by a group of dedicated educators 
                  and community leaders who recognized the need for a unified organization to support 
                  Islamic schools across New York State.
                </p>
                <p className="leading-relaxed">
                  What began as a small network of five schools has grown into a thriving association 
                  of over 50 member institutions, serving more than 15,000 students from diverse 
                  backgrounds and communities.
                </p>
                <p className="leading-relaxed">
                  Throughout our journey, we have remained committed to our founding principles: 
                  excellence in education, strong Islamic values, community building, and continuous 
                  improvement in teaching methodologies and curriculum development.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-emerald-100 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Clock className="h-8 w-8 text-primary-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">1999</h3>
                    <p className="text-gray-600">Association Founded</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">2005</h3>
                    <p className="text-gray-600">Reached 20 Member Schools</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <BookOpen className="h-8 w-8 text-primary-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">2015</h3>
                    <p className="text-gray-600">Launched Curriculum Initiative</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Award className="h-8 w-8 text-emerald-600" />
                  <div>
                    <h3 className="font-bold text-gray-900">2024</h3>
                    <p className="text-gray-600">50+ Schools, 15,000+ Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <Target className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                To support, strengthen, and advance Islamic schools by providing comprehensive 
                resources, professional development opportunities, advocacy, and a collaborative 
                network that ensures our students receive the highest quality education rooted 
                in Islamic values and academic excellence.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Provide curriculum and teaching resources</li>
                <li>• Offer professional development programs</li>
                <li>• Advocate for Islamic education</li>
                <li>• Foster collaboration between schools</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <Heart className="h-12 w-12 text-emerald-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                To be the leading organization that empowers Islamic schools to nurture confident, 
                knowledgeable, and compassionate Muslim leaders who contribute positively to their 
                communities and society while maintaining strong Islamic identity and values.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Develop future Muslim leaders</li>
                <li>• Strengthen Islamic identity</li>
                <li>• Promote community engagement</li>
                <li>• Advance educational excellence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Striving for the highest standards in education and service
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600">
                Caring for our students, families, and communities with empathy
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unity</h3>
              <p className="text-gray-600">
                Building strong bonds within our educational community
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                Upholding honesty and moral principles in all our actions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Dedicated professionals committed to advancing Islamic education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Ahmed Hassan",
                role: "Executive Director",
                bio: "Over 20 years of experience in Islamic education and administration"
              },
              {
                name: "Sister Fatima Al-Zahra",
                role: "Director of Curriculum",
                bio: "Expert in Islamic studies curriculum development and teacher training"
              },
              {
                name: "Brother Omar Ibrahim",
                role: "Director of Operations",
                bio: "Specializes in school operations and community outreach programs"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-emerald-400 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
