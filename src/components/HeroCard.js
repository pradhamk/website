export default function HeroCard({ number, title, description }) {
    return (
        <div className="relative flex-1 overflow-hidden bg-gray-950 text-white p-12 cursor-pointer transition-all duration-400 group 
                        md:bg-white md:text-black 
                        before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full 
                        before:bg-black before:transition-[left] before:duration-400 before:ease-in-out hover:before:left-0">
            <div className="relative z-10">
                <div className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-4 transition-colors duration-400 group-hover:text-gray-300 md:text-gray-500 md:group-hover:text-gray-400">
                    {number}
                </div>
                <h3 className="text-2xl font-semibold mb-4 transition-colors duration-400 text-white md:text-black md:group-hover:text-white">
                    {title}
                </h3>
                <div className="text-gray-300 leading-relaxed text-[0.95rem] 
                                opacity-100 max-h-full mt-4
                                md:text-gray-700 md:opacity-0 md:max-h-0 md:overflow-hidden md:transition-all md:duration-400 md:ease-in-out 
                                md:group-hover:opacity-100 md:group-hover:max-h-[200px] md:group-hover:mt-4 md:group-hover:text-gray-300">
                    {description}
                </div>
            </div>
        </div>
    )
}
