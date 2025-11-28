"use client";
import "./Filter.css";
import { useState } from "react";

export default function Filter() {
  const [price, setPrice] = useState({ min: 8, max: 3000 });

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice((prev) => ({ ...prev, min: Number(e.target.value) }));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice((prev) => ({ ...prev, max: Number(e.target.value) }));
  };

  return (
    <div className="filter">
      <section className="flex-section">
        <label htmlFor="price">Ціна</label>
        <div className="flex flex-row justify-center align-center gap-1">
          <input
            name="minPrice"
            type="number"
            value={price.min}
            onChange={handleMinChange}
          />
          -
          <input
            name="maxPrice"
            type="number"
            value={price.max}
            onChange={handleMaxChange}
          />
        </div>
      </section>
    </div>
  );
}
