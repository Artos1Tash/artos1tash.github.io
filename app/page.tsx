import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Hello, I&apos;m Artur</h1>
      <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">Explore my photography, projects, blog, and portfolio.</p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <Link href="/photography" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Photography
        </Link>
        <Link href="/portfolio" className="bg-transparent hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-2 px-4 rounded border border-blue-600">
          See Portfolio
        </Link>
      </div>
    </div>
  )
}
