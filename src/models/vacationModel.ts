import mongoose, {Document, Model} from 'mongoose'

export interface Vacation {
    _id?: string
    employee: string
    start: Date
    end: Date
    return: Date
}

const schema = new mongoose.Schema({
    employee: {
        type: String,
        required: true
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    return: {
        type: Date,
        required: true
    }
},{
    toJSON: {
        transform: (_, ret) => {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
        }
    }
})
interface VacationModel extends Omit<Vacation, '_id'>, Document {}

export const Vacation: Model<VacationModel> = mongoose.model('Vacation', schema)
