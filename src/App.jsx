import React, { useState, useEffect, useMemo } from 'react';
import StatsHeader from './components/StatsHeader';
import FilterBar from './components/FilterBar';
import DonorList from './components/DonorList';
import SkeletonCard from './components/SkeletonCard';

const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

function App() {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('All');

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        
        // Enrich data with random blood group and availability
        const enrichedData = data.map(user => ({
          ...user,
          bloodGroup: BLOOD_GROUPS[Math.floor(Math.random() * BLOOD_GROUPS.length)],
          isAvailable: Math.random() > 0.3, // ~70% chance of being available
        }));
        
        // Sort available donors to the top
        enrichedData.sort((a, b) => (a.isAvailable === b.isAvailable) ? 0 : a.isAvailable ? -1 : 1);
        
        setDonors(enrichedData);
      } catch (error) {
        console.error("Failed to fetch donors", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const filteredDonors = useMemo(() => {
    return donors.filter(donor => {
      const matchesSearch = 
        donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        donor.address.city.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesGroup = selectedBloodGroup === 'All' || donor.bloodGroup === selectedBloodGroup;
      
      return matchesSearch && matchesGroup;
    });
  }, [donors, searchQuery, selectedBloodGroup]);

  const availableCount = useMemo(() => {
    return donors.filter(d => d.isAvailable).length;
  }, [donors]);

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 bg-gradient-to-br from-[#F5F5F5] to-[#EBEBEB]">
      <div className="max-w-7xl mx-auto space-y-6">
        <StatsHeader availableCount={availableCount} />
        
        <FilterBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedBloodGroup={selectedBloodGroup}
          setSelectedBloodGroup={setSelectedBloodGroup}
          bloodGroups={BLOOD_GROUPS}
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : (
          <DonorList donors={filteredDonors} searchQuery={searchQuery} />
        )}
      </div>
    </div>
  );
}

export default App;
