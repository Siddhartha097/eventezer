import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageUrl: string;
    startDate: Date;
    endDate: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    catagory: { _id: string, name: string };
    organizer: { _id: string, firstName: string, lastName: string };
}

const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    location: { type: String },
    createdAt: { type: String, default: Date.now },
    imageUrl: { type: String, required: true },
    startDate: { type: String, default: Date.now },
    endDate: { type: String, default: Date.now },
    price: { type: String },
    isFree: { type: 'boolean', default: false },
    url: { type: String },
    catagory: { type: Schema.Types.ObjectId, ref: 'Catagory' },
    organizer: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Event = models.Event || model('Event', EventSchema);

export default Event;