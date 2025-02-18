import React, { useState } from 'react';
import { definitions, categories } from './data';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredDefinitions = definitions.filter(def => {
    const matchesSearch = def.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         def.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? def.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header sectie */}
        <div className="bg-red-300 rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-dark text-blackt bg-clip-text">
            JavaScript Definities.
          </h1>
          
          {/* Zoekbalk */}
          <div className="relative">
            <input
              type="text"
              placeholder="Zoek een term..."
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-primary transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg className="w-6 h-6 absolute right-4 top-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Categorie filters */}
        <div className="flex gap-3 mb-8 flex-wrap">
          <button
            className={`px-4 py-2 rounded-xl transition-all ${
              !selectedCategory 
                ? 'bg-primary text-black shadow-lg shadow-primary/30' 
                : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => setSelectedCategory('')}
          >
            Alle
          </button>
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              className={`px-4 py-2 rounded-xl transition-all ${
                selectedCategory === key 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'bg-white hover:bg-gray-50'
              }`}
              onClick={() => setSelectedCategory(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Definitie kaarten */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {filteredDefinitions.map(def => (
            <div key={def.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{def.term}</h2>
                  <span className="px-3 py-1 bg-primary-light text-primary-dark rounded-lg text-sm">
                    {categories[def.category]}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{def.definition}</p>
                
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <h3 className="font-bold mb-3 text-gray-700">Voorbeeld:</h3>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-xl overflow-x-auto">
                    <code>{def.example}</code>
                  </pre>
                </div>

                {def.relatedTerms.length > 0 && (
                  <div>
                    <h3 className="font-bold mb-3 text-gray-700">Gerelateerde termen:</h3>
                    <div className="flex gap-2 flex-wrap">
                      {def.relatedTerms.map(term => (
                        <span key={term} className="bg-gray-50 px-3 py-1 rounded-lg text-gray-600 text-sm">
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;