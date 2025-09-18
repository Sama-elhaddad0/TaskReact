export async function getAllCategories() { 
  try{
    const res = await fetch(`${process.env.API_BASE_URL}/categories.php`)
    if(!res.ok) throw new Error('Failed to fetch categories')
    const data = await res.json()
    return data
  }
  catch(error){
    console.error('Error fetching categories:', error)
    return{error: error as string}
  }}
