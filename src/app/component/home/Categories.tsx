import { Category } from '@/interfaces/categories.interface';
import { getAllCategories } from '@/services/Categories.service';
import { Cat } from 'lucide-react';
import React from 'react';
import CategoryCard from './CategoryCard';
export default async function Categories() {
  try {
    const { categories }: { categories: Category[] } = await getAllCategories();

    return (
      <section className='my-5'>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-orange-500">
            Learn, Cook, Eat Your Food
          </h2>
          <CategoryCard categories={categories} />
        </div>
      </section>
    );
  } catch (error) {
    return <p>Failed to load categories</p>;
  }
}
