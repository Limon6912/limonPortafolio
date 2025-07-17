
export const CardSection = ({ children, nameSection, Icon }) => {
    return (
        <section
            class=" text-neutral-50 tracking-[.01em]  max-w-[85%] mx-auto lg:max-w-[100%]  my-30"
        >

            <div class="text-rose-300 w-full border-b pb-2 flex flex-row  "
            ><span className='mr-2 '> {Icon && (<Icon stroke={1.5} />)}</span><label htmlFor="">{nameSection}</label>
            </div>


            {children}
        </section>
    )
}

export default CardSection
