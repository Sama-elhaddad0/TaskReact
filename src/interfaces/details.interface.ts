export interface MealsResponse {
  meals: MealDetailes[]
}

export interface MealDetailes {
  idMeal: string
  strMeal: string
  strMealAlternate: string | null
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags: string
  strYoutube: string
  [key: `strIngredient${number}`]: string | null
  [key: `strMeasure${number}`]: string | null
  strSource: string | null
  strImageSource: string | null
  strCreativeCommonsConfirmed: string | null
  dateModified: string | null
}
