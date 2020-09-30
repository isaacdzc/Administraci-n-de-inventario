import { connect } from '../config/database'

class VendorsController {

    async getAllVendors() {
        const db = await connect()
        const result = await db.collection('vendors').find({}).toArray()
        return result
    }

    static async newVendor(vendor) {
        try {
            const db = await connect()
            const result = await db.collection('vendors').insertOne(vendor)
            return result
        } catch (e) {
            return e
        }
    }
}

module.exports = VendorsController

