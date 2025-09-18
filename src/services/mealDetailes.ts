export async function getmealDetailes(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}lookup.php?i=${id}`);

    if (!res.ok) throw new Error('Failed to fetch meal details');

    const data = await res.json();

    if (!data.meals || data.meals.length === 0) {
      return null;
    }

    return data.meals[0]; 
  } catch (error) {
    console.error('Error fetching meal details:', error);
    return null;
  }
}
