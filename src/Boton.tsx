import type { ReactNode } from "react"
import type React from "react"

type Props = {
    texto: string
    textoComplementario?: string
    children?: ReactNode
}

function Boton(props: Props) {
    const contenido = `${props.texto}${props.textoComplementario ?? ""} `
    return <button type="button">{props.children}</button>
}

export { Boton }

