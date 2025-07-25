import { Calendar, User, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 1,
    title: "Excellence in Islamic Education: Best Practices for Modern Schools",
    excerpt: "Discover the latest methodologies and approaches that are transforming Islamic education, combining traditional values with contemporary teaching techniques.",
    author: "Dr. Ahmed Hassan",
    date: "December 15, 2024",
    category: "Education",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    title: "Building Strong Character: The Role of Islamic Values in Student Development",
    excerpt: "Explore how Islamic schools can effectively integrate character building and moral development into their curriculum and daily practices.",
    author: "Sister Fatima Al-Zahra",
    date: "December 12, 2024",
    category: "Character Development",
    readTime: "4 min read",
    featured: true
  },
  {
    id: 3,
    title: "Technology Integration in Islamic Schools: Balancing Innovation with Tradition",
    excerpt: "Learn how Islamic schools are successfully incorporating modern technology while maintaining their core educational values and principles.",
    author: "Brother Omar Ibrahim",
    date: "December 10, 2024",
    category: "Technology",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 4,
    title: "Parent Engagement Strategies for Islamic Schools",
    excerpt: "Effective approaches to building strong partnerships between Islamic schools and families to support student success.",
    author: "Dr. Aisha Rahman",
    date: "December 8, 2024",
    category: "Community",
    readTime: "4 min read",
    featured: false
  },
  {
    id: 5,
    title: "Preparing Students for College: Academic Excellence in Islamic Education",
    excerpt: "How Islamic schools are preparing students for higher education while maintaining strong Islamic identity and values.",
    author: "Dr. Ahmed Hassan",
    date: "December 5, 2024",
    category: "Academic Excellence",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 6,
    title: "Professional Development for Islamic School Educators",
    excerpt: "The importance of continuous learning and professional growth for teachers and administrators in Islamic educational institutions.",
    author: "Sister Fatima Al-Zahra",
    date: "December 3, 2024",
    category: "Professional Development",
    readTime: "5 min read",
    featured: false
  }
]

const categories = ["All", "Education", "Character Development", "Technology", "Community", "Academic Excellence", "Professional Development"]

export default function Blog() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ISA Blog & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest insights, best practices, and news from the 
              Islamic Schools Association. Discover resources to enhance Islamic education.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600">
              Our most popular and impactful content
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary-400 to-emerald-400"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors border border-gray-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-500"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center"
                    >
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Subscribe to our newsletter for the latest articles and updates from the Islamic Schools Association.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
