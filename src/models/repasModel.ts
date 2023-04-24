import { Model } from 'pinia-orm'

export default class Repas extends Model {
    static entity = 'repas'

    static fields() {
        return {
            id: this.string(''),
            name: this.string(''),
            email: this.string(''),
            entree: this.string(''),
            repas: this.string(''),
            restriction: this.string(''),
            nameGuest: this.string(''),
            entreeGuest: this.string(''),
            repasGuest: this.string(''),
            restrictionGuest: this.string(''),
            kids05: this.number(0),
            kids612: this.number(0),
            restrictionKids: this.string(''),
            bruncAdults: this.number(0),
            bruncKids: this.number(0),
            chanson: this.string(''),
            archive: this.attr(false),
            createdAt: this.attr(null),
        }
    }

    declare id: string
    declare name: string
    declare email: string
    declare entree: string
    declare repas: string
    declare restriction: string
    declare nameGuest: string
    declare entreeGuest: string
    declare repasGuest: string
    declare restrictionGuest: string
    declare kids05: number
    declare kids612: number
    declare bruncAdults: number
    declare bruncKids: number
    declare chanson: string
    declare restrictionKids: string
    declare archive: boolean
}
