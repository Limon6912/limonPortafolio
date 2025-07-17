
export const LinkFooter = ({ url, texto = 'link' }) => {
    return (
        <>
            <a href={url} className="hover:text-rose-300 inline-block  my-1.5" target="_blank">{texto}</a><br />
        </>
    )
}

export default LinkFooter
