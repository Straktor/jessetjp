import { Model } from "pinia-orm"

export default class RSVP extends Model {
    static entity = "rsvps"

    static fields() {
        return {
            id: this.string(""),
            name: this.string(""),
            email: this.string(""),
            guest: this.string(""),
            response: this.string(""),
            kids: this.attr(""),
            archive: this.attr(false),
            createdAt: this.attr(null),
        }
    }

    declare id: string
    declare name: string
    declare email: string
    declare guest: string
    declare response: string
    declare kids: number
    declare archive: boolean
}
