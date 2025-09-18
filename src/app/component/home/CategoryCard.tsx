'use client'
import React from 'react'
import { Category } from '@/interfaces/categories.interface';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Meals from './Meals';

export default function CategoryCard({ categories }: { categories: Category[] }) {
    const[activeCategory,setActiveCategory]=useState<string>(categories[0].strCategory);
  return (
   <>
   <div className='hidden md:flex flex flex-wrap gap-5'>
     {categories.map((category) => (
       <button
  key={category.idCategory}
  onClick={() => setActiveCategory(category.strCategory)}
  className={`border p-4 rounded-lg transition-transform duration-300 font-cr
    ${activeCategory === category.strCategory
      ? 'bg-orange-500 text-white border-orange-500'
      : 'border-orange-400 hover:bg-orange-100  hover:text-orange-500'}
  `}
>
  {category.strCategory}
</button>

     ))}
   </div>
  <div className="md:hidden font-cr">
    <Select onValueChange={(value) => setActiveCategory(value)} defaultValue={categories[0].strCategory}>
  <SelectTrigger className="w-full">
    <SelectValue className='text-dark' placeholder="choose category" />
  </SelectTrigger>
  <SelectContent>
   { categories.map((category) => (
    <SelectItem key={category.strCategory} value={category.strCategory}>
      {category.strCategory}
    </SelectItem>
   ))}
  </SelectContent>
</Select>
  </div>
  <Meals category={activeCategory}/>
   </>
    
  );
}
