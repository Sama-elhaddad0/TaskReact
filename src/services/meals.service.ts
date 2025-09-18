export async function getMealsCategories(category:string) { 
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}filter.php?c=${category}`)
    if(!res.ok) throw new Error('Failed to fetch categories')
    const data = await res.json()
    return data.meals
  }
  catch(error){
    console.error('Error fetching categories:', error)
    return{error: error as string}
  }}
