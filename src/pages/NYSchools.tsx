import { MapPin, Phone, Mail, ExternalLink, Users, BookOpen } from 'lucide-react'

const allNYSchools = [
  // Member Schools
  {
    name: "Al-Noor Islamic Academy",
    location: "Brooklyn, NY",
    grades: "K-12",
    students: 450,
    phone: "(718) 555-0123",
    email: "info@alnooracademy.org",
    website: "www.alnooracademy.org",
    isMember: true,
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
    isMember: true,
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
    isMember: true,
    description: "Providing quality Islamic education in the heart of Manhattan for over 15 years."
  },
  // Non-Member Schools
  {
    name: "Al-Furqan Islamic School",
    location: "Buffalo, NY",
    grades: "K-8",
    students: 150,
    phone: "(716) 555-0111",
    email: "info@alfurqan.org",
    website: "www.alfurqan.org",
    isMember: false,
    description: "Serving the Buffalo Muslim community with quality Islamic education."
  },
  {
    name: "Madrasa Al-Islamiya",
    location: "Albany, NY",
    grades: "1-12",
    students: 200,
    phone: "(518) 555-0222",
    email: "contact@madrasaalbany.org",
    website: "www.madrasaalbany.org",
    isMember: false,
    description: "Traditional Islamic education in New York's capital region."
  },
  {
    name: "Rochester Islamic Academy",
    location: "Rochester, NY",
    grades: "Pre-K-12",
    students: 180,
    phone: "(585) 555-0333",
    email: "admissions@rochesterislamic.org",
    website: "www.rochesterislamic.org",
    isMember: false,
    description: "Comprehensive Islamic education serving the Rochester area."
  }
]

export default function NYSchools() {
  const memberSchools = allNYSchools.filter(school => school.isMember)
  const nonMemberSchools = allNYSchools.filter(school => !school.isMember)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Islamic Schools in New York
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A comprehensive directory of Islamic educational institutions across New York State, 
              including both our member schools and other Islamic schools in the region.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">{allNYSchools.length}</div>
                <div className="text-gray-600">Total Schools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">{memberSchools.length}</div>
                <div className="text-gray-600">Member Schools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">
                  {allNYSchools.reduce((sum, school) => sum + school.students, 0).toLocaleString()}
                </div>
                <div className="text-gray-600">Total Students</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Schools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Member Schools
            </h2>
            <p className="text-xl text-gray-600">
              Schools that are part of the Islamic Schools Association
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberSchools.map((school, index) => (
              <div key={index} className="bg-white border-2 border-primary-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="bg-primary-600 text-white px-4 py-2">
                  <span className="text-sm font-semibold">MEMBER SCHOOL</span>
                </div>
                <div className="h-40 bg-gradient-to-br from-primary-400 to-emerald-400"></div>
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

      {/* Other Schools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Other Islamic Schools in New York
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Additional Islamic educational institutions across New York State
            </p>
            <div className="bg-emerald-100 border border-emerald-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-emerald-800">
                <strong>Interested in joining our association?</strong> Contact us to learn about membership benefits and requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nonMemberSchools.map((school, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-gray-400 to-gray-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{school.name}</h3>
                  <p className="text-gray-600 mb-4">{school.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                      {school.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <BookOpen className="h-4 w-4 mr-2 text-gray-500" />
                      Grades: {school.grades}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-gray-500" />
                      {school.students} Students
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-gray-500" />
                      {school.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />
                      {school.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 hover:text-gray-800">
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

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Know of a School We Missed?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Help us maintain a comprehensive directory of Islamic schools in New York. 
            Contact us to add or update school information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@islamicschools.org"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Submit School Information
            </a>
            <a
              href="/membership"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              Learn About Membership
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
