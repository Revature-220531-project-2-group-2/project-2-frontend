export class CharClass {
    subscribe(arg0: (data: any) => void) {
      throw new Error('Method not implemented.')
    }
    name:string
    slug: string
    desc: string
    hit_dice: string
    hp_at_1st_level: string
    hp_at_higher_levels: string
    prof_armour: string
    prof_tools: string
    prof_saving_throws: string
    prof_skills: string
    equipment: string
    table: string
    spellcasting_ability: string
    subtype_name: string
    archetypes: Archetype[]
    document_slug:string
    document_title:string
    document_license_url:string


    constructor(
        name: string, 
        slug: string, 
        desc: string, 
        hit_dice: string, 
        hp_at_1st_level: string, 
        hp_at_higher_levels: string, 
        prof_armour: string, 
        prof_tools: string, 
        prof_saving_throws: string, 
        prof_skills: string, 
        equipment: string, 
        table: string, 
        spellcasting_ability: string, 
        subtype_name: string, 
        archetypes: Archetype[], 
        document_slug: string, 
        document_title: string, 
        document_license_url: string
    ) {
        this.name = name
        this.slug = slug
        this.desc = desc
        this.hit_dice = hit_dice
        this.hp_at_1st_level = hp_at_1st_level
        this.hp_at_higher_levels = hp_at_higher_levels
        this.prof_armour = prof_armour
        this.prof_tools = prof_tools
        this.prof_saving_throws = prof_saving_throws
        this.prof_skills = prof_skills
        this.equipment = equipment
        this.table = table
        this.spellcasting_ability = spellcasting_ability
        this.subtype_name = subtype_name
        this.archetypes = archetypes
        this.document_slug = document_slug
        this.document_title = document_title
        this.document_license_url = document_license_url
    }

}

export class Archetype {
    name: string
    slug: string
    desc: string
    document_slug:string
    document_title:string
    document_license_url:string


    constructor(
        name: string, 
        slug: string, 
        desc: string, 
        document_slug: string, 
        document_title: string, 
        document_license_url: string
    ) {
        this.name = name
        this.slug = slug
        this.desc = desc
        this.document_slug = document_slug
        this.document_title = document_title
        this.document_license_url = document_license_url
    }

}