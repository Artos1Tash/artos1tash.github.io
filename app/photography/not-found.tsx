import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Photo Not Found</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Sorry, the photo you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/photography" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
        &larr; Return to Gallery
      </Link>
    </div>
  )
}

