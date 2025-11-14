import type { ReactNode } from "react"

type Props = {
    texto: string
    textoComplementario?: string
    children?: ReactNode
}

function Boton(props: Props) {
    const contenido = `${props.texto}${props.textoComplementario ?? ""} `
    return (
        <>
            <p>{contenido}</p>
            <button type="button">{props.children}</button>
        </>
    )
}

export { Boton }

