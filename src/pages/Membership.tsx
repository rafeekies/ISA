import { CheckCircle, Users, BookOpen, Award, ArrowRight, FileText, Clock, DollarSign } from 'lucide-react'

const membershipBenefits = [
  {
    icon: BookOpen,
    title: "Curriculum Resources",
    description: "Access to comprehensive Islamic curriculum materials, lesson plans, and educational resources."
  },
  {
    icon: Users,
    title: "Professional Development",
    description: "Training workshops, conferences, and certification programs for educators and administrators."
  },
  {
    icon: Award,
    title: "Accreditation Support",
    description: "Guidance and assistance with school accreditation processes and quality assurance."
  },
  {
    icon: Users,
    title: "Networking Opportunities",
    description: "Connect with other Islamic schools, share best practices, and collaborate on initiatives."
  },
  {
    icon: FileText,
    title: "Advocacy & Representation",
    description: "Unified voice in educational policy discussions and advocacy for Islamic schools."
  },
  {
    icon: BookOpen,
    title: "Resource Sharing",
    description: "Access to shared resources, bulk purchasing opportunities, and cost-saving programs."
  }
]

const membershipRequirements = [
  "Must be a registered Islamic educational institution",
  "Commitment to Islamic values and educational excellence",
  "Qualified teaching staff with appropriate credentials",
  "Adherence to state educational standards and regulations",
  "Financial stability and transparent governance",
  "Willingness to participate in association activities"
]

const applicationProcess = [
  {
    step: 1,
    title: "Initial Application",
    description: "Submit completed membership application form with required documentation."
  },
  {
    step: 2,
    title: "Review Process",
    description: "Our membership committee reviews your application and supporting materials."
  },
  {
    step: 3,
    title: "Site Visit",
    description: "Scheduled visit to your school to assess facilities and meet with leadership."
  },
  {
    step: 4,
    title: "Board Approval",
    description: "Final review and approval by the Islamic Schools Association Board of Directors."
  },
  {
    step: 5,
    title: "Welcome & Onboarding",
    description: "Official welcome and orientation to association resources and programs."
  }
]

export default function Membership() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Association
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Become part of a thriving network of Islamic schools committed to educational 
              excellence and Islamic values. Together, we can strengthen Islamic education 
              and support our students' success.
            </p>
            <a
              href="#application"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center"
            >
              Start Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Membership Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membership Benefits
            </h2>
            <p className="text-xl text-gray-600">
              Discover the advantages of joining our association
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <benefit.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Membership Requirements
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                To ensure the quality and integrity of our association, we have established 
                the following requirements for membership:
              </p>
              <ul className="space-y-4">
                {membershipRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Membership Fees</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">Annual Membership</span>
                    <span className="text-2xl font-bold text-primary-600">$2,500</span>
                  </div>
                  <p className="text-gray-600 mt-1">For schools with up to 200 students</p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">Large School Membership</span>
                    <span className="text-2xl font-bold text-primary-600">$4,000</span>
                  </div>
                  <p className="text-gray-600 mt-1">For schools with 200+ students</p>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">Application Fee</span>
                    <span className="text-2xl font-bold text-emerald-600">$500</span>
                  </div>
                  <p className="text-gray-600 mt-1">One-time processing fee</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-emerald-800 text-sm">
                  <strong>Note:</strong> Payment plans are available. Contact us to discuss options 
                  that work for your school's budget.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600">
              A simple, straightforward process to join our association
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 hidden lg:block"></div>

            <div className="space-y-12">
              {applicationProcess.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="flex-1 lg:pr-8">
                      <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className="flex items-center mb-4 lg:justify-end">
                          <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                            {item.step}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                    
                    <div className="flex-1 lg:pl-8"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Apply?
            </h2>
            <p className="text-xl text-gray-600">
              Start your membership application today
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    School Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Principal/Director Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School Address *
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grades Served *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., K-12"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Students *
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year Established *
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join the Islamic Schools Association?
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Please describe your school's mission and how membership would benefit your community..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  required
                />
                <label className="ml-2 block text-sm text-gray-700">
                  I confirm that our school meets all membership requirements and agree to the terms and conditions *
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Questions about membership? Contact us at{' '}
              <a href="mailto:membership@islamicschools.org" className="text-primary-600 hover:text-primary-700">
                membership@islamicschools.org
              </a>{' '}
              or call{' '}
              <a href="tel:555-123-4567" className="text-primary-600 hover:text-primary-700">
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
