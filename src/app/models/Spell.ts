
export class Spell {
  slug: string;
  name: string;
  desc: string;
  higher_level: string;
  page: string;
  range: string;
  components: string;
  material: string;
  rutual: string;
  duration: string;
  concentration: string;
  casting_time: string;
  level: string;
  level_int: number;
  school: string;
  dnd_class: string;
  archetype: string;
  circles: string;
  document__slug: string;
  document__title: string;
  document__licesnse_url: string;


  constructor(
    slug: string, 
    name: string, 
    desc: string, 
    higher_level: string, 
    page: string, 
    range: string, 
    components: string, 
    material: string, 
    rutual: string, 
    duration: string, 
    concentration: string, 
    casting_time: string, 
    level: string, 
    level_int: number, 
    school: string, 
    dnd_class: string, 
    archetype: string, 
    circles: string, 
    document__slug: string, 
    document__title: string, 
    document__licesnse_url: string
) {
    this.slug = slug
    this.name = name
    this.desc = desc
    this.higher_level = higher_level
    this.page = page
    this.range = range
    this.components = components
    this.material = material
    this.rutual = rutual
    this.duration = duration
    this.concentration = concentration
    this.casting_time = casting_time
    this.level = level
    this.level_int = level_int
    this.school = school
    this.dnd_class = dnd_class
    this.archetype = archetype
    this.circles = circles
    this.document__slug = document__slug
    this.document__title = document__title
    this.document__licesnse_url = document__licesnse_url
  }

}