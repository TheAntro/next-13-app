import Card from '@/components/Card/Card';
import { getUrl } from '@/lib/getUrl';
import { League } from '../api/leagues/route';

async function getLeagues() {
  const res = await fetch(getUrl('/api/leagues'));
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Leagues() {
  const data = await getLeagues();
  const leagues = data.data as Array<League>;
  return (
    <main>
      <h1>Leagues</h1>
      <div>
        {leagues.map((league) => (
          <Card key={league.id}>
            <h2>{league.title}</h2>
            <p>{league.description}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
