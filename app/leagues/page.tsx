import Card from '@/components/Card/Card';

export default function Page() {
  return (
    <main>
      <h1>Leagues</h1>
      <div>
        <Card>
          <h2>League 1</h2>
          <p>Description</p>
        </Card>
        <Card>
          <h2>League 2</h2>
          <p>Description for league 2</p>
        </Card>
      </div>
    </main>
  );
}
