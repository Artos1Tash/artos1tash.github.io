import Image from 'next/image'
import Link from 'next/link'

const photos = [
  { src: '/images/city.jpg', alt: 'View on Montreal', id: 1 },
  { src: '/images/city3.JPG', alt: 'City of Ottawa', id: 2 },
  { src: '/images/snake.jpg', alt: 'Autumn forest', id: 3 },
  { src: '/images/airplane.jpg', alt: 'Airoplane museum', id: 4 },
  { src: '/images/city2.jpg', alt: 'Montreal skyscrapers', id: 5 },
  { src: '/images/rocks.jpg', alt: 'Rock climbing fun', id: 6 },
]

export default function Photography() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Photography</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <Link href={`/photography/${photo.id}`} key={photo.id} className="group">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:scale-105">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white text-lg font-semibold">{photo.alt}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
