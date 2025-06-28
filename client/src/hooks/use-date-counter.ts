import { useState, useEffect } from 'react';

export function useDateCounter() {
  const [daysTogether, setDaysTogether] = useState(0);
  const [daysToAnniversary, setDaysToAnniversary] = useState(0);

  useEffect(() => {
    const updateCounters = () => {
      // Relationship start date - replace with actual date
      const startDate = new Date('2024-03-15');
      const now = new Date();
      const oneYearDate = new Date('2025-03-15');
      
      const days = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      const daysUntilAnniversary = Math.floor((oneYearDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      
      setDaysTogether(days);
      setDaysToAnniversary(daysUntilAnniversary);
    };

    updateCounters();
    // Update daily
    const interval = setInterval(updateCounters, 1000 * 60 * 60 * 24);
    
    return () => clearInterval(interval);
  }, []);

  return { daysTogether, daysToAnniversary };
}
