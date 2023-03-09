export interface Hero {
    [key: string]: string
}

export interface NavigationItem {
    title: string,
    route: string
}

export interface Character {
    name: string,
    url: string,
    img: string
}

export interface Characters {
    [key: string]: Character
}

export interface HeroContext {
    hero: string,
    setHero: (hero: string) => void
}