import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const photos = [  
    { src: '/images/city.jpg', alt: 'View on Montreal', id: 1 },
    { src: '/images/city3.JPG', alt: 'City of Ottawa', id: 2 },
    { src: '/images/snake.jpg', alt: 'Autumn forest', id: 3 },
    { src: '/images/airplane.jpg', alt: 'Aeroplane museum', id: 4 },
    { src: '/images/city2.jpg', alt: 'Montreal skyscrapers', id: 5 },
    { src: '/images/rocks.jpg', alt: 'Rock climbing fun', id: 6 },
]

export default function PhotoPage({ params }: { params: { id: string } }) {
  const photo = photos.find(p => p.id === parseInt(params.id))

  if (!photo) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/photography" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4 inline-block">
        &larr; Back to Gallery
      </Link>
      <div className="mt-4">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={1200}
          height={900}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
        <h1 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">{photo.alt}</h1>
      </div>
    </div>
  )
}

