type features = {
    heading: string
    content: string
}

type socialLink = {
    title: string
    logo: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
    link: string
}

type sessionUser= {
    name: string
    email: string
    image: string
    id: string
}