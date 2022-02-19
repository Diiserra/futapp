import { FutAppHeader } from './components/FutAppHeader';
import { PlayersList } from './components/PlayersList';
import './styles/global.css'

export function App() {
  return (
    <>
      <FutAppHeader />
      <main className='main-container'>
        <PlayersList />
      </main>
    </>
  );
}

