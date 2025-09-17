'use client';

import React, { useState, useRef, useEffect } from 'react';

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
}

const FilterDropdown = ({ label, options, value, onChange }: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter(item => item !== option));
    } else {
      onChange([...value, option]);
    }
  };

  const getDisplayText = () => {
    if (value.length === 0) return label;
    if (value.length === 1) return value[0];
    return `${value.length} selecionados`;
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`dropdown-trigger ${isOpen ? 'open' : ''}`}
      >
        <span>{getDisplayText()}</span>
        <svg
          className={`dropdown-chevron ${isOpen ? 'open' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`dropdown-option ${value.includes(option) ? 'selected' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
