import { NextResponse } from 'next/server';
export type League = {
  id: string;
  title: string;
  description: string;
  participants: Array<string>;
};

const dummyLeagues: Array<League> = [
  {
    id: 'league_1',
    title: 'First league',
    description: 'Play some games, have some fun',
    participants: ['1', '2', '3'],
  },
  {
    id: 'league_2',
    title: 'Second league',
    description: 'Serious play, try hard',
    participants: ['1', '2', '3', '4'],
  },
];

export async function GET() {
  return NextResponse.json({ data: dummyLeagues });
}
