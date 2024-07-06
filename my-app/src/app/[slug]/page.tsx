// src/app/boards/[slug]/page.tsx
import { notFound } from 'next/navigation';

interface BoardProps {
  params: { slug: string };
}

const fetchBoardBySlug = async (slug: string) => {
  // Fetch the board data from your database using the slug
  // This is a placeholder example, replace it with your actual data fetching logic
  return {
    id: '1',
    title: 'Sample Board',
    slug: slug,
  };
};

export default async function BoardPage({ params }: BoardProps) {
  const board = await fetchBoardBySlug(params.slug);

  if (!board) {
    notFound();
  }

  return (
    <div>
      <h1>{board.title}</h1>
      <p>Board ID: {board.id}</p>
      <p>Board Slug: {board.slug}</p>
    </div>
  );
}

