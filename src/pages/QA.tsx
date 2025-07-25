import { useState } from 'react'
import { ChevronDown, ChevronUp, Search, MessageCircle, Mail, Phone } from 'lucide-react'

const faqCategories = [
  {
    name: "Membership",
    faqs: [
      {
        question: "What are the benefits of joining the Islamic Schools Association?",
        answer: "Members gain access to curriculum resources, professional development programs, networking opportunities, advocacy support, accreditation guidance, and cost-saving programs through bulk purchasing and resource sharing."
      },
      {
        question: "How much does membership cost?",
        answer: "Annual membership fees are $2,500 for schools with up to 200 students and $4,000 for larger schools. There's also a one-time application fee of $500. Payment plans are available to accommodate different budgets."
      },
      {
        question: "What are the requirements to become a member?",
        answer: "Schools must be registered Islamic educational institutions, demonstrate commitment to Islamic values and educational excellence, have qualified teaching staff, adhere to state educational standards, maintain financial stability, and show willingness to participate in association activities."
      },
      {
        question: "How long does the application process take?",
        answer: "The complete application process typically takes 6-8 weeks from submission to final approval, including application review, site visit, and board approval."
      }
    ]
  },
  {
    name: "Educational Resources",
    faqs: [
      {
        question: "What curriculum resources are available to member schools?",
        answer: "We provide comprehensive Islamic curriculum materials, lesson plans, educational frameworks, assessment tools, and teaching resources that integrate Islamic values with academic excellence across all grade levels."
      },
      {
        question: "Do you offer professional development for teachers?",
        answer: "Yes, we offer regular workshops, conferences, certification programs, and training sessions for educators and administrators. These cover both Islamic education methodologies and general teaching best practices."
      },
      {
        question: "How can schools access shared resources?",
        answer: "Member schools can access our resource portal online, participate in bulk purchasing programs, and connect with other schools for resource sharing through our networking platform."
      }
    ]
  },
  {
    name: "Accreditation & Standards",
    faqs: [
      {
        question: "Does the association help with school accreditation?",
        answer: "Yes, we provide guidance and support throughout the accreditation process, help schools meet quality standards, and offer resources to maintain accreditation requirements."
      },
      {
        question: "What educational standards do member schools follow?",
        answer: "Member schools adhere to state educational standards while integrating Islamic values and teachings. We help schools balance secular academic requirements with Islamic educational goals."
      },
      {
        question: "How do you ensure quality education across member schools?",
        answer: "We conduct regular assessments, provide quality assurance guidelines, offer continuous professional development, and facilitate peer reviews among member schools."
      }
    ]
  },
  {
    name: "General Information",
    faqs: [
      {
        question: "How many schools are currently members of the association?",
        answer: "We currently have over 50 member schools across New York State, serving more than 15,000 students from diverse backgrounds and communities."
      },
      {
        question: "Can schools outside of New York join the association?",
        answer: "While our primary focus is on New York schools, we do consider applications from schools in neighboring states. Contact us to discuss your specific situation."
      },
      {
        question: "How can parents get involved with the association?",
        answer: "Parents can participate through their school's involvement in association activities, attend our conferences and workshops, and support advocacy efforts for Islamic education."
      },
      {
        question: "What advocacy work does the association do?",
        answer: "We advocate for Islamic schools at the state and local levels, work on policy issues affecting Islamic education, and represent member schools' interests in educational discussions and legislation."
      }
    ]
  }
]

export default function QA() {
  const [searchTerm, setSearchTerm] = useState('')
  const [openItems, setOpenItems] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const filteredFAQs = faqCategories.filter(category => 
    selectedCategory === 'All' || category.name === selectedCategory
  ).map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Questions & Answers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to frequently asked questions about the Islamic Schools Association, 
              membership, resources, and our services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search questions and answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-700'
              }`}
            >
              All Categories
            </button>
            {faqCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.name
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse all categories.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredFAQs.map((category) => (
                <div key={category.name}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {category.name}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, index) => {
                      const itemId = `${category.name}-${index}`
                      const isOpen = openItems.includes(itemId)
                      
                      return (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                          >
                            <span className="font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            )}
                          </button>
                          {isOpen && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help! Contact us for personalized assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <Mail className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">
                Get detailed answers to your questions
              </p>
              <a
                href="mailto:info@islamicschools.org"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                info@islamicschools.org
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <Phone className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team
              </p>
              <a
                href="tel:555-123-4567"
                className="text-primary-600 font-semibold hover:text-primary-700"
              >
                (555) 123-4567
              </a>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg text-center">
              <MessageCircle className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule a Meeting</h3>
              <p className="text-gray-600 mb-4">
                Book a consultation with our experts
              </p>
              <button className="text-primary-600 font-semibold hover:text-primary-700">
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
