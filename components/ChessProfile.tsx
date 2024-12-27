// components/ChessProfile.tsx
'use client'

import { useEffect, useState } from 'react'

interface ChessStats {
  chess_rapid?: {
    last: {
      rating: number
    }
  }
  chess_blitz?: {
    last: {
      rating: number
    }
  }
  chess_bullet?: {
    last: {
      rating: number
    }
  }
}

interface ChessProfileProps {
  username: string
}

export default function ChessProfile({ username = "artos_tash" }: ChessProfileProps) {
  const [stats, setStats] = useState<ChessStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchChessStats() {
      try {
        const response = await fetch(`https://api.chess.com/pub/player/${username}/stats`)
        if (!response.ok) throw new Error('Failed to fetch stats')
        const data = await response.json()
        setStats(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load chess stats')
      } finally {
        setLoading(false)
      }
    }
    fetchChessStats()
  }, [username])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-4 text-red-500">
        {error}
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {username}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg text-center">
          <h3 className="font-semibold text-gray-700 mb-2">Rapid</h3>
          <p className="text-2xl font-bold">
            {stats?.chess_rapid?.last?.rating || 'N/A'}
          </p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg text-center">
          <h3 className="font-semibold text-gray-700 mb-2">Blitz</h3>
          <p className="text-2xl font-bold">
            {stats?.chess_blitz?.last?.rating || 'N/A'}
          </p>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-lg text-center">
          <h3 className="font-semibold text-gray-700 mb-2">Bullet</h3>
          <p className="text-2xl font-bold">
            {stats?.chess_bullet?.last?.rating || 'N/A'}
          </p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <a
          href={`https://www.chess.com/member/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 underline"
        >
          View Full Profile on Chess.com
        </a>
      </div>
    </div>
  )
}