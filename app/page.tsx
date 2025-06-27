'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { ProductCard } from '@/components/ProductCard';
import { Footer } from '@/components/Footer';
import { products } from '@/lib/products';
import { FilterState } from '@/types/product';

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1500],
    brands: [],
    searchQuery: ''
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const priceParam = searchParams.get('price');
    const brandParam = searchParams.get('brand');
    const searchParam = searchParams.get('search');

    setFilters({
      categories: categoryParam ? categoryParam.split(',') : [],
      priceRange: priceParam ? priceParam.split('-').map(Number) as [number, number] : [0, 1500],
      brands: brandParam ? brandParam.split(',') : [],
      searchQuery: searchParam || ''
    });
  }, [searchParams]);

  // Update URL when filters change
  const updateURL = (newFilters: FilterState) => {
    const params = new URLSearchParams();
    
    if (newFilters.categories.length > 0) {
      params.set('category', newFilters.categories.join(','));
    }
    if (newFilters.priceRange[0] > 0 || newFilters.priceRange[1] < 1500) {
      params.set('price', `${newFilters.priceRange[0]}-${newFilters.priceRange[1]}`);
    }
    if (newFilters.brands.length > 0) {
      params.set('brand', newFilters.brands.join(','));
    }
    if (newFilters.searchQuery) {
      params.set('search', newFilters.searchQuery);
    }

    const queryString = params.toString();
    router.push(queryString ? `/?${queryString}` : '/');
  };

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    updateURL(newFilters);
  };

  const handleSearch = (query: string) => {
    const newFilters = { ...filters, searchQuery: query };
    setFilters(newFilters);
    updateURL(newFilters);
  };

  // Filter products based on current filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
        return false;
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false;
      }

      // Brand filter
      if (filters.brands.length > 0 && product.brand && !filters.brands.includes(product.brand)) {
        return false;
      }

      // Search filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        return (
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          (product.brand && product.brand.toLowerCase().includes(query))
        );
      }

      return true;
    });
  }, [filters]);

  const maxPrice = Math.max(...products.map(p => p.price));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} searchQuery={filters.searchQuery} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-left font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Filters {filteredProducts.length !== products.length && `(${filteredProducts.length} products)`}
            </button>
          </div>

          {/* Sidebar */}
          <div className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block`}>
            <Sidebar
              filters={filters}
              onFiltersChange={handleFiltersChange}
              maxPrice={maxPrice}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                Products {filters.searchQuery && `for "${filters.searchQuery}"`}
              </h1>
              <p className="text-gray-600">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => handleFiltersChange({
                    categories: [],
                    priceRange: [0, maxPrice],
                    brands: [],
                    searchQuery: ''
                  })}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}