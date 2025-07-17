import { SectionFoter } from './SectionFoter.jsx'
import { ContenedorSectionFoter } from './ContenedorSectionFoter.jsx'
import { LinkFooter } from './LinkFooter.jsx'
export const Footer = () => {
    return (
        <footer
            class="bg-black text-neutral-50  py-8 w-full min-h-[200px]  absolute button-0 left-0 flex "
        >
            <ContenedorSectionFoter >
                <SectionFoter textFooter={"Enlaces"}>
                    <LinkFooter url={"https://github.com/Limon6912"} texto='Github'></LinkFooter>
                    <LinkFooter url={"https://www.linkedin.com/in/limoneduardo/"} texto='linkedin'></LinkFooter>
                </SectionFoter>



                <SectionFoter textFooter={"Redes Sociales"}>
                    <LinkFooter url={"https://www.instagram.com/eduardo_limon.31/"} texto='Instagram'></LinkFooter>
                    <LinkFooter url={"https://www.facebook.com/pepe.limon.988"} texto='Facebook'></LinkFooter>

                </SectionFoter>


                <SectionFoter textFooter={"Contacto"}>
                    <LinkFooter url={"mailto:pepetazlimon23@gmail.com"} texto='pepetazlimon23@gmail.com'></LinkFooter>
                    <samp className=" inline-block  my-1.5">271-164-54-26</samp><br />
                </SectionFoter>


            </ContenedorSectionFoter>

        </footer >
    )
}

export default Footer
