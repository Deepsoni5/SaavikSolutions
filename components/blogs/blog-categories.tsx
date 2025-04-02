"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const categories = [
  "Marketing",
  "Branding",
  "Design",
  "Development",
  "SEO",
  "Web Design",
  "E-commerce",
  "Mobile",
  "Graphics",
  "WordPress",
  "Industry Management",
  "Social Media",
  "News/Events",
  "Business",
  "Education",
  "Finance",
  "Health",
  "Transportation",
  "Online Shopping",
  "Music Streaming",
  "Food & Drinks",
  "eCommerce",
  "Real Estate",
  "Automobile",
  "Restaurant",
]

const blogPosts = [
  {
    id: 1,
    title: "using Lorem Ipsum is that it has a more-or-less normal",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
    image:
      "https://images.unsplash.com/photo-1501644898242-cfea317d7faf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Design", "Web"],
    slug: "blog-post-1",
    color: "bg-pink-100",
  },
  {
    id: 2,
    title: "using Lorem Ipsum is that it has a more-or-less normal",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Design", "Web"],
    slug: "blog-post-2",
    color: "bg-orange-100",
  },
  {
    id: 3,
    title: "using Lorem Ipsum is that it has a more-or-less normal",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Design", "Web"],
    slug: "blog-post-3",
    color: "bg-blue-100",
  },
  {
    id: 4,
    title: "using Lorem Ipsum is that it has a more-or-less normal",
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Design", "Web"],
    slug: "blog-post-4",
    color: "bg-green-100",
  },
]

export default function BlogCategories() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <div className="mt-12 flex flex-col lg:flex-row">
      {/* Categories Sidebar - Desktop */}
      <div className="hidden w-full lg:block lg:w-1/4 lg:min-w-[250px] lg:pr-6">
        <div className="overflow-hidden rounded-t-md">
          <div className="bg-red-600 p-4">
            <h3 className="text-lg font-bold text-white">All Category</h3>
          </div>
          <div className="max-h-[600px] overflow-y-auto bg-gray-900">
            <ul className="divide-y divide-gray-800">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    href={`/blogs/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block p-3 text-sm text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Categories Dropdown - Mobile */}
      <div className="mb-6 lg:hidden">
        <div className="overflow-hidden rounded-md">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex w-full items-center justify-between bg-red-600 p-4 text-white"
          >
            <h3 className="text-lg font-bold">All Category</h3>
            {isDropdownOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          {isDropdownOpen && (
            <div className="max-h-[300px] overflow-y-auto bg-gray-900">
              <ul className="divide-y divide-gray-800">
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      href={`/blogs/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                      className="block p-3 text-sm text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="w-full lg:w-3/4">
        <div className="max-h-[800px] overflow-y-auto pr-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="relative h-48 w-full overflow-hidden lg:h-auto lg:w-2/5">
                    <div className={`absolute inset-0 ${post.color} opacity-20`}></div>
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4 lg:p-6">
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-gray-900 lg:text-xl">{post.title}</h3>
                      <p className="text-sm text-gray-600">{post.excerpt}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex space-x-2">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button className="rounded-full bg-red-600 px-4 text-xs font-medium hover:bg-red-700">
                        READ MORE
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

