import React, { useState, useEffect, useMemo } from 'react';
import StatsHeader from './components/StatsHeader';
import FilterBar from './components/FilterBar';
import DonorList from './components/DonorList';

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
          <div className="glass-panel rounded-2xl flex flex-col items-center justify-center p-32 shadow-sm">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-vitality-red border-opacity-80"></div>
            <p className="mt-6 text-gray-500 font-medium text-lg animate-pulse">Loading Donor Network...</p>
          </div>
        ) : (
          <DonorList donors={filteredDonors} />
        )}
      </div>
    </div>
  );
}

export default App;
