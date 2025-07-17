export const Habilidades = ({ src, label = "Tecnología" }) => {
    return (
        <div className="snap-always text-center h-[144px] w-[110px] mx-4 flex flex-col justify-around items-center relative hover:scale-110 transition-transform duration-150">
            <div className="bg-neutral-50 w-[100px] h-[100px] p-[20px] rounded-full flex items-center justify-center">
                <img
                    src={src}
                    className="w-full h-full object-contain"
                    alt={`${label} Icon`}
                />
            </div>

            <span className="absolute bottom-0 font-sans font-light">{label}</span>
        </div>
    );
};

export default Habilidades;
