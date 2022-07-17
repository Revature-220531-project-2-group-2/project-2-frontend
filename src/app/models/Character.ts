
export class Character {
    charId: number;
    charName: string;
    race: string;
    charClass: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    spells: Array<String>;
    equipment: Array<String>;


    constructor(
        charId: number,
        name: string,
        race: string,
        charClass: string,
        strength: number,
        dexterity: number,
        constitution: number,
        intelligence: number,
        wisdom: number,
        charisma: number,
        spells: Array<String>,
        equipment: Array<String>
    ) {
        this.charId = charId
        this.charName = name
        this.race = race
        this.charClass = charClass
        this.strength = strength
        this.dexterity = dexterity
        this.constitution = constitution
        this.intelligence = intelligence
        this.wisdom = wisdom
        this.charisma = charisma
        this.spells = spells
        this.equipment = equipment
    }

}