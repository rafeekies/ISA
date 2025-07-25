import { MapPin, Phone, Mail, ExternalLink, Users, BookOpen } from 'lucide-react'

const memberSchools = [
  {
    name: "Al-Noor Islamic Academy",
    location: "Brooklyn, NY",
    grades: "K-12",
    students: 450,
    phone: "(718) 555-0123",
    email: "info@alnooracademy.org",
    website: "www.alnooracademy.org",
    description: "A comprehensive Islamic school focusing on academic excellence and character development."
  },
  {
    name: "Masjid Al-Taqwa School",
    location: "Queens, NY",
    grades: "Pre-K-8",
    students: 280,
    phone: "(718) 555-0456",
    email: "admissions@altaqwaschool.org",
    website: "www.altaqwaschool.org",
    description: "Nurturing young minds with Islamic values and modern educational approaches."
  },
  {
    name: "Islamic Foundation School",
    location: "Manhattan, NY",
    grades: "K-12",
    students: 320,
    phone: "(212) 555-0789",
    email: "contact@ifschool.org",
    website: "www.ifschool.org",
    description: "Providing quality Islamic education in the heart of Manhattan for over 15 years."
  },
  {
    name: "Darul Uloom Academy",
    location: "Bronx, NY",
    grades: "1-12",
    students: 380,
    phone: "(718) 555-0321",
    email: "info@darululoom.edu",
    website: "www.darululoom.edu",
    description: "Traditional Islamic education combined with contemporary academic curriculum."
  },
  {
    name: "Al-Hidayah Islamic School",
    location: "Staten Island, NY",
    grades: "Pre-K-12",
    students: 220,
    phone: "(718) 555-0654",
    email: "admissions@alhidayah.org",
    website: "www.alhidayah.org",
    description: "A community-centered school emphasizing both Islamic and secular education."
  },
  {
    name: "Baitul Hikmah Academy",
    location: "Long Island, NY",
    grades: "K-8",
    students: 180,
    phone: "(516) 555-0987",
    email: "info@baitulhikmah.org",
    website: "www.baitulhikmah.org",
    description: "Fostering intellectual growth and spiritual development in a nurturing environment."
  }
]

export default function MemberSchools() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Member Schools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the exceptional Islamic schools that are part of our association, 
              each committed to providing quality education rooted in Islamic values.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-gray-600">Member Schools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">15,000+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">5</div>
                <div className="text-gray-600">NYC Boroughs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberSchools.map((school, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary-400 to-emerald-400"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{school.name}</h3>
                  <p className="text-gray-600 mb-4">{school.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-primary-600" />
                      {school.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="h-4 w-4 mr-2 text-primary-600" />
                      Grades: {school.grades}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-primary-600" />
                      {school.students} Students
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-emerald-600" />
                      {school.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-emerald-600" />
                      {school.email}
                    </div>
                    <div className="flex items-center text-sm text-primary-600 hover:text-primary-700">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      <a href={`https://${school.website}`} target="_blank" rel="noopener noreferrer">
                        {school.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Is Your School Ready to Join?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Become part of our growing network of Islamic schools committed to educational excellence.
          </p>
          <a
            href="/membership"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center"
          >
            Learn About Membership
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
