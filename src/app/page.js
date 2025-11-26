'use client';

import { useState, useEffect } from 'react';
import { Header, Hero, Footer } from '../components/layout';
import { FilterTags } from '../components/search';
import { RecipeGrid } from '../components/recipe';
import { performCompleteSearch } from '../utils/search';
import recipesData from '../data/recipes.json';
import styles from "./page.module.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState({
    ingredients: [],
    appliances: [],
    ustensils: []
  });
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

  useEffect(() => {
    const filtered = performCompleteSearch(recipesData, searchTerm, selectedTags);
    setFilteredRecipes(filtered);
  }, [searchTerm, selectedTags]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleTagSelect = (category, tag) => {
    setSelectedTags(prev => {
      const newTags = {
        ...prev,
        [category]: [...prev[category], tag]
      };
      return newTags;
    });
  };

  const handleTagRemove = (category, tagToRemove) => {
    setSelectedTags(prev => ({
      ...prev,
      [category]: prev[category].filter(tag => tag !== tagToRemove)
    }));
  };

  return (
    <div className={styles.page}>
      <Header />
      <Hero 
        onSearch={handleSearch} 
        searchTerm={searchTerm}
      />
      <FilterTags
        filteredRecipes={filteredRecipes}
        totalRecipes={filteredRecipes.length}
        selectedTags={selectedTags}
        onTagSelect={handleTagSelect}
        onTagRemove={handleTagRemove}
      />
      <RecipeGrid recipes={filteredRecipes} />
      <Footer />
    </div>
  );
}
