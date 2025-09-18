"use client"
import React, { useEffect, useState } from 'react'
import { getMealsCategories } from '@/services/meals.service'
import { Meal } from '@/interfaces/meals.interface'
import Link from 'next/link'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Meals({ category }: { category: string }) {
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true)
      try {
        const meals = await getMealsCategories(category)
        setMeals(meals)
      } catch (error) {
        console.error('Error fetching meals:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchMeals()
  }, [category])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 font-cr">
      {meals.length > 0 && meals.map((meal) => (
        <Card key={meal.idMeal} className="flex flex-col items-center p-4 shadow-md">
          <Image
            src={meal.strMealThumb}
            alt={meal.strMeal}
            width={140}
            height={140}
            className="rounded-full object-cover mb-4"
          />

          <CardContent className="p-0 text-center">
            <p className="line-clamp-1 font-semibold">{meal.strMeal}</p>
          </CardContent>

          <CardFooter className="w-full flex justify-center mt-4">
            <Link href={`/meal/${meal.idMeal}`} passHref>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                View Recipe
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
