import { CardSection } from './CardSection.jsx'
import { Experiencia } from './sections/Experiencia.jsx'
import { Habilidades } from './sections/Habilidades.jsx'
import { IconBriefcase2 } from '@tabler/icons-react';
import { IconBrain } from '@tabler/icons-react';
import { ContenidoSection } from './sections/ContenidoSection.jsx'

export const MainContent = () => {
    return (
        <main>
            <CardSection nameSection="Experiencia" Icon={IconBriefcase2}  >
                <ContenidoSection>
                    <ul class="grid lg:grid-cols-2 md:grid-cols-1 gap-x-20 ">
                        <Experiencia
                            title={'Prácticas Grupo Comercial Chedraui, S.A.B. de C.V.'}
                            description={`Colaboré en el desarrollo y mantenimiento de sistemas internos, enfocados en la automatización de procesos administrativos y operativos.`}
                        />

                        <Experiencia
                            title={'Desarrollo de sistemas'}
                            description={`Desarrollo de sistemas a medida para pequeñas empresas locales, incluyendo puntos de venta, sistemas de inventario y gestión de clientes. `}
                        />

                        <Experiencia
                            title={'Uso de Git y Github'}
                            description={`En proyectos tanto personales como del área, he implementado Git como sistema de control de versiones y GitHub con la finalidad de almacenar en la nube, lo que permite mantener un historial de mis proyectos, haciéndolos más organizados y fáciles de gestionar.`}
                        />

                        <Experiencia
                            title={'Habilidades Blandas'}
                            description={`A lo largo de mis estudios, actividades profecionales y personales he desarrollado habilidades blandas como el trabajo en equipo, la comunicación efectiva y la responsabilidad, las cuales me han permitido adaptarme rápidamente a diferentes entornos y colaborar eficazmente con otros.`}
                        />

                    </ul>
                </ContenidoSection>
            </CardSection>

            <CardSection nameSection="Habilidades" Icon={IconBrain} >
                <ContenidoSection>
                    <div
                        class="flex flex-wrap gap-4  justify-center "
                    >
                        <Habilidades label='Html' alt={'Html'} src={"/img/icons/html5.svg"} />
                        <Habilidades label='JavaScript' alt='JavaScript' src={"/img/icons/javascript.svg"} />
                        <Habilidades label='Css' alt='Css' src={"/img/icons/css_old.svg"} />
                        <Habilidades label='NodeJs' alt='NodeJs' src={"https://cdn.simpleicons.org/nodedotjs"} />
                        <Habilidades label='Postgresql' alt='Postgresql' src={"/img/icons/postgresql.svg"} />
                        <Habilidades label='React' alt='React' src={"/img/icons/React_dark.svg"} />
                        <Habilidades label='Mysql' alt='Mysql' src={"/img/icons/mysql.svg"} />
                        <Habilidades label='Express' alt='Express' src={"/img/icons/expressjs.svg"} />
                        <Habilidades label='Python' alt='Python' src={"/img/icons/python.svg"} />
                        <Habilidades label='Spring' alt='Spring' src={"/img/icons/spring.svg"} />
                        <Habilidades label='Java' alt='Java' src={"../../../img/icons/java.svg"} />
                        <Habilidades label='tailwindcss' alt='tailwindcss' src={"/img/icons/tailwindcss-wordmark.svg"} />

                    </div>

                </ContenidoSection>
            </CardSection>
        </main >
    )
}

export default MainContent
