import { Index } from "./Index"


export class Spell {
  _id: string
  index: string
  name: string
  desc: string[]
  higher_level: string[]
  range: string
  components: string[]
  material: string
  ritual: boolean
  duration: string
  concentration: boolean
  casting_time: string
  level: number
  attack_type: string
  damage: SpellDamage
  dc: SpellDc
  school: Index
  classes: Index[]
  subclasses: Index[]
  url: string


  constructor(
    _id: string, 
    index: string, 
    name: string, 
    desc: string[], 
    higher_level: string[], 
    range: string, 
    components: string[], 
    material: string, 
    ritual: boolean, 
    duration: string, 
    concentration: boolean, 
    casting_time: string, 
    level: number, 
    attack_type: string, 
    damage: SpellDamage, 
    dc: SpellDc, 
    school: Index, 
    classes: Index[], 
    subclasses: Index[], 
    url: string
) {
    this._id = _id
    this.index = index
    this.name = name
    this.desc = desc
    this.higher_level = higher_level
    this.range = range
    this.components = components
    this.material = material
    this.ritual = ritual
    this.duration = duration
    this.concentration = concentration
    this.casting_time = casting_time
    this.level = level
    this.attack_type = attack_type
    this.damage = damage
    this.dc = dc
    this.school = school
    this.classes = classes
    this.subclasses = subclasses
    this.url = url
  }

}



export class SpellDamage {
  damage_type: Index
  damage_at_Character_level: object

  constructor(damage_type: Index, damage_at_Character_level: object) {
    this.damage_type = damage_type
    this.damage_at_Character_level = damage_at_Character_level
  }

}

export class SpellDc {
  dc: Index
  dc_success: string

  constructor(dc: Index, dc_success: string) {
    this.dc = dc
    this.dc_success = dc_success
  }
}