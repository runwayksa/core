import mongoose from 'mongoose';


const VisaSchema = new Visas.Schema({
    candidate: { type: Schema.Types.ObjectId, ref: 'Candidate', required: true, index: true },
    visaNo: { type: String },
    issueDate: Date,
    expiryDate: Date,
    type: { type: String },
    status: { type: String, enum: ['ISSUED','EXPIRED','CANCELED','SOLD'], default: 'ISSUED', index: true },
    visaCopy: [{ filename: String, url: String }],
    notes: String   
    }, { timestamps: true });


module.exports = mongoose.model('Visa', VisaSchema);