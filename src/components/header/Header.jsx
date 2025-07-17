import { ButtonsHeader } from './ButtonsHeader.jsx'
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconFileCv } from '@tabler/icons-react';

export const Header = () => {
    return (
        <header class="mt-3 md:mt-14 lg:mt-20 border-neutral-50  justify-center items-center max-w-[85%] mx-auto  lg:max-w-[100%] flex lg:justify-between flex-col  lg:flex-row  gap-8 sm:flex-col">

            <div class="flex justify-center sm:justify-start w-full sm:w-auto">
                <div class="w-55 h-55 sm:w-80 sm:h-80 rounded-full overflow-hidden">
                    <img
                        src="../../../img/cdmx2.webp"
                        alt="Foto de José Eduardo Limón"
                        class="w-full h-full object-cover object-[0%_80%]"
                    />
                </div>
            </div>


            <div
                class="flex flex-col justify-center text-neutral-50 text-lg   max-w-full sm:max-w-[600px]"
            >
                <h1
                    class="flex flex-col  font-light text-center lg:text-left "
                >
                    <span class="text-[1.5em] sm:text-[1.7em] ">
                        Soy
                        <span
                            class="text-rose-300  font-semibold animate-pulse animate-infinite ml-[5px] animate-ease-linear"
                        >
                            José Eduardo Limón Muñoz
                        </span>
                    </span>

                    <span
                        class="text-[1.2em] sm:text-[1.3em]   lg:text-left   "
                    >
                        Ingeniero en sistemas
                    </span>
                </h1>
                <p
                    class="font-light tracking-wide text-center sm:text-center text-base sm:text-lg md:text-center lg:text-left my-6"
                >
                    Profesional en ingeniería de sistemas con sólidos conocimientos en
                    programación y desarrollo de soluciones tecnológicas, enfocado en
                    aplicar mis habilidades para contribuir al éxito de proyectos y
                    organizaciones.
                </p>
                <div className='flex justify-center  lg:justify-start flex-wrap sm:flex-nowrap '>
                    <div className='lg:flex lg:flex-row'>
                        <ButtonsHeader textLink={"GitHup"} url={"https://github.com/Limon6912"} ><IconBrandGithub stroke={1.5} /></ButtonsHeader>

                        <ButtonsHeader textLink={"Linkedin"} url={"https://www.linkedin.com/in/limoneduardo/"} ><IconBrandLinkedin stroke={1.5} /></ButtonsHeader>


                    </div>
                    <div className='lg:flex lg:flex-row '>
                        <ButtonsHeader textLink={"Correo"} url={"mailto:pepetazlimon23@gmail.com"} ><IconMail stroke={1.5} />
                        </ButtonsHeader>


                        <ButtonsHeader textLink={"Download"} url={"/cvEduardoLimon.pdf"} download='cvEduardoLimon.pdf' ><IconFileCv stroke={1.5} /></ButtonsHeader>

                    </div>




                </div>

            </div>





        </header>

    )
}

export default Header
