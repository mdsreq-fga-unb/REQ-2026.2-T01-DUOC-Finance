import { useEffect, useState } from 'react'

type Health = { status: string; database: string }

const statusColor: Record<string, string> = {
  up: 'text-green-700',
  down: 'text-red-700',
}

function App() {
  const [health, setHealth] = useState<Health | null>(null)
  const [unreachable, setUnreachable] = useState(false)

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then(setHealth)
      .catch(() => setUnreachable(true))
  }, [])

  const api = unreachable ? 'down' : health ? 'up' : '...'
  const database = unreachable ? 'down' : (health?.database ?? '...')

  return (
    <main className="mx-auto my-16 max-w-md px-4">
      <h1 className="text-3xl font-bold">DUOC Finance</h1>
      <p className="text-gray-500">Ambiente de desenvolvimento</p>
      <ul className="mt-6 space-y-2">
        <li>
          API: <strong className={statusColor[api]}>{api}</strong>
        </li>
        <li>
          Banco de dados:{' '}
          <strong className={statusColor[database]}>{database}</strong>
        </li>
      </ul>
    </main>
  )
}

export default App
