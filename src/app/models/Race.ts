export class Race {
    name: string
    slug: string
    desc: string
    asi_desc: string
    asi: Attributes[]
    age: string
    alignment: string
    size: string
    speed: Speed
    speed_desc: string
    languages: string
    vision: string
    traits: string
    subraces: Subrace[]
    document_slug: string
    document_title: string
    document_license_url: string

    constructor(
        name: string, 
        slug: string, 
        desc: string, 
        asi_desc: string, 
        asi: Attributes[], 
        age: string, 
        alignment: string, 
        size: string, 
        speed: Speed, 
        speed_desc: string, 
        languages: string, 
        vision: string, 
        traits: string, 
        subraces: Subrace[], 
        document_slug: string, 
        document_title: string, 
        document_license_url: string
    ) {
        this.name = name
        this.slug = slug
        this.desc = desc
        this.asi_desc = asi_desc
        this.asi = asi
        this.age = age
        this.alignment = alignment
        this.size = size
        this.speed = speed
        this.speed_desc = speed_desc
        this.languages = languages
        this.vision = vision
        this.traits = traits
        this.subraces = subraces
        this.document_slug = document_slug
        this.document_title = document_title
        this.document_license_url = document_license_url
    }
}

export class Attributes {
    attributes: string[]
    value: number

    constructor(attributes: string[], value: number) {
        this.attributes = attributes
        this.value = value
    }
}

export class Speed {
    walk: number

    constructor(walk: number) {
        this.walk = walk
    }
}

export class Subrace {
    name: string
    slug: string
    desc: string
    asi: Attributes[]
    traits: string
    asi_desc: string
    document_slug: string
    document_title: string


    constructor(
        name: string, 
        slug: string, 
        desc: string, 
        asi: Attributes[], 
        traits: string, 
        asi_desc: string, 
        document_slug: string, 
        document_title: string
    ) {
        this.name = name
        this.slug = slug
        this.desc = desc
        this.asi = asi
        this.traits = traits
        this.asi_desc = asi_desc
        this.document_slug = document_slug
        this.document_title = document_title
    }
    
}