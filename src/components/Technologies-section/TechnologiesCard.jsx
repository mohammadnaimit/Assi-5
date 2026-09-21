

const TechnologiesCard = ({ technology, onAdd, isAdded }) => {
    const badgeColors = {
        blue: 'bg-blue-50 text-blue-500',
        green: 'bg-emerald-50 text-emerald-500',
        orange: 'bg-orange-50 text-orange-500',
        pink: 'bg-pink-50 text-pink-500',
        yellow: 'bg-yellow-50 text-yellow-600',
        cyan: 'bg-cyan-50 text-cyan-500',
    };

    return (
        <article className={`card min-w-0 flex h-full min-h-56 flex-col overflow-hidden rounded-lg border-2 !bg-white text-gray-900 ${isAdded ? '!border-pink-500' : '!border-transparent'}`}>
            <div className="card-body flex h-full flex-col gap-0 !bg-white p-4">
                <div className="flex items-start justify-between">
                    <img
                        className="h-9 w-9 rounded object-contain"
                        src={technology.icon}
                        alt={`${technology.name} icon`}
                    />
                    {technology.badge && (
                        <span className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${badgeColors[technology.badgeColor] || 'bg-gray-50 text-gray-500'}`}>
                            {technology.badge}
                        </span>
                    )}
                </div>
                <h2 className="mt-2 text-sm font-bold text-gray-900">{technology.name}</h2>
                <p className="mt-1 line-clamp-3 text-[10px] leading-4 text-gray-500">{technology.description}</p>
                <div className="mt-auto flex items-center justify-between pt-2 text-[10px] text-gray-500">
                    <span>{technology.category}</span>
                    <span>{technology.level}</span>
                    <span className="inline-flex items-center gap-0.5">
                        <span className="text-yellow-400" aria-hidden="true">★</span>
                        {technology.rating}
                    </span>
                </div>
                <button
                    type="button"
                    className={`btn btn-xs mt-3 h-8 min-h-8 w-full border-0 text-[10px] ${isAdded ? 'cursor-not-allowed bg-gray-200 text-gray-500' : 'bg-gray-950 text-white hover:bg-gray-800'}`}
                    onClick={() => onAdd(technology)}
                    disabled={isAdded}
                >
                    {isAdded ? 'Added to Stack' : 'Add to Stack'}
                </button>
            </div>
        </article>
    );
};

export default TechnologiesCard;