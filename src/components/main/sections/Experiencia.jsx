export const Experiencia = ({ title, description }) => {
    return (
        <li class="py-8">
            <h2 class="font-semibold mb-5 text-center md:text-justify lg:text-left">
                {title}

            </h2>
            <p className="text-center md:text-justify lg:text-left font-light">
                {description}

            </p>
        </li>
    )
}

export default Experiencia
