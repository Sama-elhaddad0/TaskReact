export interface MealsResponse {
  meals: MealDetailes[]
}

export interface MealDetailes {
  idMeal: string
  strMeal: string
  strMealAlternate: any
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags: string
  strYoutube: string
  [key: `strIngredient${number}`]: string | null
  [key: `strMeasure${number}`]: string | null
  strSource: any
  strImageSource: any
  strCreativeCommonsConfirmed: any
  dateModified: any
}
