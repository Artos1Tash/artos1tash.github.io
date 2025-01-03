import Link from "next/link"

const projects = [
    {
      title: 'E-commerce Website',
      description: 'E-commerce store design with next.js and tailwindcss',
      tags: ['Next.js', 'Tailwind', 'React'],
      link: "https://stackblitz-ecommerce-store.vercel.app/",
    },
    {
      title: 'Shop website',
      description: 'Django Backend for a shop website',
      tags: ['Python', 'Django', 'Django Rest Framework'],
      link: "https://github.com/Artos1Tash/Shop"
    },
    {
      title: 'RPG game',
      description: 'Simple 2D game made with Ebitengine and Go',
      tags: ['Go', 'Ebitengine'],
      link: "https://github.com/Artos1Tash/ebitgame"
    },
    {
      title: 'Youtube Downloader',
      description: 'Youtube video downloader (ffmpeg required)',
      tags: ['Python', 'Django', 'Youtube-dl'],
    },
  ]
  
  export default function Projects() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white ">My Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h1 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white"><Link href={project.link}>{project.title}</Link></h1>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <p key={tagIndex} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  