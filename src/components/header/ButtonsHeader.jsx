
export const ButtonsHeader = ({ textLink, url, children, download, ...rest }) => {
    // const handleDownload = (e) => {
    //     if (download) {
    //         const confirmDownload = window.confirm("¿Quieres descargar el CV?");
    //         if (!confirmDownload) {
    //             e.preventDefault(); // cancela la navegación si el usuario dice que no
    //         }
    //     }
    // };
    return (
        <a href={url} target="_blank"
            download={download}
            // onClick={handleDownload}
            className="
                    bg-amber-50 text-neutral-950 rounded-2xl p-3 cursor-pointer text-sm hover:bg-rose-300 
    flex items-center justify-center transition-transform duration-200 ease-in-out transform hover:scale-105
    w-35 h-10  mt-2.5 mx-1.5"
            {...rest} >
            <div className="mr-1" >
                {children}
            </div>
            {textLink}
        </a >

    )
}

export default ButtonsHeader
