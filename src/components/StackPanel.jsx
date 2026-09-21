const StackPanel = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <aside className="h-fit rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:col-span-1">
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
      <p className="mb-5 text-sm text-gray-400">{stack.length === 0 ? 'No technologies selected yet.' : `${stack.length} technolog${stack.length === 1 ? 'y' : 'ies'} selected`}</p>

      {stack.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-gray-300 p-7 text-center text-base text-gray-400">
          Your stack is empty.
        </p>
      ) : (
        <div className="space-y-2">
          {stack.map((technology) => (
            <div key={technology.id} className="flex items-center gap-2 rounded-md border border-gray-200 p-1.5">
              <img
                className="h-6 w-6 rounded object-contain"
                src={technology.icon}
                alt=""
              />
              <span className="min-w-0 flex-1 truncate text-xs font-medium text-gray-800">
                {technology.name}
              </span>
              <button
                type="button"
                className="btn btn-circle btn-ghost btn-xs text-gray-500"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        className="btn btn-xs mt-3 h-7 min-h-7 w-full border-red-200 bg-white text-[10px] text-red-500 hover:bg-red-50"
        onClick={onRemoveAll}
        disabled={stack.length === 0}
      >
        Remove All
      </button>
    </aside>
  )
}

export default StackPanel
