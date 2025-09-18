import React from 'react'
import { getmealDetailes } from '@/services/mealDetailes'
import { MealDetailes } from '@/interfaces/details.interface'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default async function Mealpage({ params }: { params: Promise<{ mealId: string }> }) {
  const { mealId } = await params
  const mealDetailes: MealDetailes = await getmealDetailes(mealId)

  const ingredients: { name: string; measure: string }[] = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = mealDetailes[`strIngredient${i}`]
    const measure = mealDetailes[`strMeasure${i}`]
    if (ingredient) {
      ingredients.push({ name: ingredient, measure: measure || '' })
    }
  }

  return (
    <div className="md:flex min-h-screen gap-6 p-6">
      <div className="md:w-1/3 m-5 ">
        {mealDetailes.strMealThumb ? (
          <Image
            src={mealDetailes.strMealThumb}
            alt={mealDetailes.strMeal}
            width={400}
            height={400}
            className="rounded-lg shadow-lg md:mx-10 mt-10"
          />
        ) : (
          <div className="w-[400px] h-[400px] bg-gray-200 flex items-center justify-center rounded-lg shadow-lg md:mx-10 mt-10">
            No Image Available
          </div>
        )}
      </div>

      <div className="md:w-1/3 p-4 font-cr">
        <h1 className="text-2xl font-bold mb-4">{mealDetailes.strMeal}</h1>
        <p>{mealDetailes.strInstructions}</p>
        <div className="mt-4">
          <Button variant="default" className="mr-3">
            <a href={mealDetailes.strYoutube} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </Button>
          <Button variant="destructive">
            <a href={mealDetailes.strSource} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          </Button>
        </div>
      </div>

      <div className="md:w-1/3 p-4 rounded-lg font-cr">
        <h2 className="text-xl font-bold mb-4">Ingredients</h2>
        <ul className="divide-y divide-gray-200">
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} - {ingredient.measure}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
