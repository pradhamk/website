export default function HeroCard({ number, title, description }) {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-neutral-900 p-8 text-white shadow-lg
                    transition-all duration-300 hover:shadow-2xl hover:bg-neutral-800 cursor-pointer
                    w-full lg:w-1/3">
      
      <div className="mb-3 text-sm font-medium tracking-wider text-gray-400 group-hover:text-gray-300">
        {number}
      </div>

      <h3 className="mb-4 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-gray-100">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
        {description}
      </p>
    </div>
  )
}
