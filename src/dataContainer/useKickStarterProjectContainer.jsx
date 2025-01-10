import { useEffect, useState } from 'react';

const useKickStarterProjectContainer = () => {
    const [projects, setProjects] = useState([]); // Initialize as an empty array
    const url = 'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched data:', data);
                setProjects(data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 

    return { projects }; 
};

export default useKickStarterProjectContainer;
