import { createSignal, onMount, For } from 'solid-js';

function App() {
  const [jokes, setJokes] = createSignal([]);
  const [newJoke, setNewJoke] = createSignal({ setup: '', punchline: '' });
  const [loading, setLoading] = createSignal(false);

  const fetchJokes = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/getJokes');
      const data = await response.json();
      setJokes(data);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateJoke = async (event) => {
    event.preventDefault();
    if (!newJoke().setup || !newJoke().punchline) return;
    setLoading(true);
    try {
      const response = await fetch('/api/createJoke', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newJoke()),
      });
      const data = await response.json();
      setJokes([data, ...jokes()]);
      setNewJoke({ setup: '', punchline: '' });
    } catch (error) {
      console.error('Error creating joke:', error);
    } finally {
      setLoading(false);
    }
  };

  onMount(() => {
    fetchJokes();
  });

  return (
    <div class="h-full flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div class="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h1 class="text-3xl font-bold mb-6 text-center">Joke App</h1>
        <form onSubmit={handleCreateJoke} class="mb-6">
          <input
            type="text"
            placeholder="Setup"
            value={newJoke().setup}
            onInput={(e) => setNewJoke({ ...newJoke(), setup: e.target.value })}
            class="w-full p-2 mb-4 border rounded box-border text-gray-800"
          />
          <input
            type="text"
            placeholder="Punchline"
            value={newJoke().punchline}
            onInput={(e) => setNewJoke({ ...newJoke(), punchline: e.target.value })}
            class="w-full p-2 mb-4 border rounded box-border text-gray-800"
          />
          <button
            type="submit"
            class="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
            disabled={loading()}
          >
            {loading() ? 'Adding...' : 'Add Joke'}
          </button>
        </form>
        <For each={jokes()}>
          {(joke) => (
            <div class="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p class="font-semibold">{joke.setup}</p>
              <p class="text-gray-600">{joke.punchline}</p>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default App;