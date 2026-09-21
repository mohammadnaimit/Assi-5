
import { use } from 'react';
import TechnologiesCard from './TechnologiesCard';

const Technologies = ({ technologiesPromise, onAdd, stack }) => {
    const allTechnologies = use(technologiesPromise);
   
 
    return (
        <div className='grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3'>
            {allTechnologies.length === 0 && (
                <p>No technologies found</p>
            )}
            {allTechnologies.map((technology) => (
                <div key={technology.id}>
                    <TechnologiesCard
                        technology={technology}
                        onAdd={onAdd}
                        isAdded={stack.some((item) => item.id === technology.id)}
                    />
                </div>
            ))}
            
        </div>
    );
};

export default Technologies;