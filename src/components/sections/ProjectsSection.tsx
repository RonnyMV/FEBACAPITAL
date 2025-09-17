'use client';

import React, { useState } from 'react';
import FilterDropdown from '@/components/ui/FilterDropdown';
import FeaturedProject from '@/components/ui/FeaturedProject';
import RegularProject from '@/components/ui/RegularProject';

interface Project {
  id: number;
  title: string;
  image: string;
  badge: string;
  badgeColor: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'HORIZONTE RESIDENCE',
    image: '/images/image_grid_1.png',
    badge: 'PRÉ LANÇAMENTO',
    badgeColor: 'bg-white text-black'
  },
  {
    id: 2,
    title: 'ONE TOWER',
    image: '/images/image_grid_2.png',
    badge: 'LANÇAMENTO',
    badgeColor: 'bg-green-500 text-white'
  },
  {
    id: 3,
    title: 'INFINITY COAST',
    image: '/images/image_grid_3.png',
    badge: 'PRÉ LANÇAMENTO',
    badgeColor: 'bg-white text-black'
  },
  {
    id: 4,
    title: 'SKYLINE TOWER',
    image: '/images/image_grid_4.png',
    badge: 'LANÇAMENTO',
    badgeColor: 'bg-green-500 text-white'
  },
  {
    id: 5,
    title: 'GRANDE PLACE TOWER',
    image: '/images/image_grid_5.png',
    badge: 'PRÉ LANÇAMENTO',
    badgeColor: 'bg-white text-black'
  },
  {
    id: 6,
    title: 'IMPERIUM TOWER',
    image: '/images/image_grid_6.png',
    badge: 'LANÇAMENTO',
    badgeColor: 'bg-green-500 text-white'
  },
  {
    id: 7,
    title: 'TITANIUM TOWER',
    image: '/images/image_grid_7.png',
    badge: 'PRÉ LANÇAMENTO',
    badgeColor: 'bg-white text-black'
  },
  {
    id: 8,
    title: 'BLUE COST TOWER',
    image: '/images/image_grid_8.png',
    badge: 'LANÇAMENTO',
    badgeColor: 'bg-green-500 text-white'
  },
  {
    id: 9,
    title: 'BLUE COST TOWER',
    image: '/images/image_grid_9.png',
    badge: 'LANÇAMENTO',
    badgeColor: 'bg-green-500 text-white'
  }
];

const ProjectsSection = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    stage: '',
    location: '',
    propertyType: ''
  });

  const filterOptions = {
    stage: ['Todos', 'Pré Lançamento', 'Lançamento', 'Em Construção', 'Pronto'],
    location: ['Todos', 'São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'],
    propertyType: ['Todos', 'Apartamento', 'Casa', 'Cobertura', 'Terreno']
  };

  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 pl-[135px] pr-[135px]">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-black mb-2">
              Confira todos os
            </h2>
            <h2 className="text-3xl md:text-4xl font-light">
              <span className="text-black">empreendimentos da </span>
              <span className="text-green-600 font-semibold">Liva</span>
            </h2>
          </div>
          
          <button
            onClick={toggleFilters}
            className="flex items-center space-x-2 border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <span className="font-medium">FILTROS</span>
          </button>
        </div>

        {showFilters && (
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FilterDropdown
                label="Estágio do empreendimento"
                options={filterOptions.stage}
                value={filters.stage}
                onChange={(value) => handleFilterChange('stage', value)}
              />
              <FilterDropdown
                label="Localização"
                options={filterOptions.location}
                value={filters.location}
                onChange={(value) => handleFilterChange('location', value)}
              />
              <FilterDropdown
                label="Tipo de imóvel"
                options={filterOptions.propertyType}
                value={filters.propertyType}
                onChange={(value) => handleFilterChange('propertyType', value)}
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {projects.map((project, index) => (
            <React.Fragment key={project.id}>
              {index === 0 ? (
                <FeaturedProject project={project} />
              ) : (
                <RegularProject project={project} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="text-center">
          <button className="border border-gray-300 text-gray-300 px-8 py-3 rounded-sm font-semibold hover:bg-gray-600 hover:text-white transition-colors">
            CARREGAR MAIS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
