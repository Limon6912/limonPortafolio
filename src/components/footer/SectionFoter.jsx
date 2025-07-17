
export const SectionFoter = ({ children, textFooter }) => {
    return (
        <div className="my-8 md:my-0 ">
            <span className="font-bold mb-10">{textFooter}</span><br />
            <div className="mt-4 font-light">
                {children}
            </div>

        </div>
    )
}

export default SectionFoter
