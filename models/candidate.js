import mongoose from 'mongoose';

//Candidate Schema
const CandidateSchema = new Candidates.Schema({
    // BASIC INFORMATION FOR CANDIDATE TRACKING
    sl: { type: Number, required: true,unique:true, index: true },
    name: { type: String, required: true, trim: true },
    passportNo: { type: String, required: true, trim: true, uppercase: true, index: true },
    agent: { type: String, default: '' },
    receivedDate: { type: Date},
    status: {
        type: String,
        enum: ['JUST RECIVED','MEDICAL','MOFA','FINGER','VISA','MANPOWER','FLGIHT','CANCEL','ON-HOLD'],
        default: 'JUST RECIVED',
        index: true 
    },
    dob: { type: Date },
    notes: { type: String },
    // files or external resources
    passportCopyUrl: { type: String },

    // reference to the latest record of each sub-process for quick access
    latestMedical: { type: Schema.Types.ObjectId, ref: 'Medical' },
    latestMofa: { type: Schema.Types.ObjectId, ref: 'Mofa' },
    latestFinger: { type: Schema.Types.ObjectId, ref: 'Finger' },
    latestVisa: { type: Schema.Types.ObjectId, ref: 'Visa' },
    latestManpower: { type: Schema.Types.ObjectId, ref: 'Manpower' },
    isDeleted: { type: Boolean, default: false }
    }, { timestamps: true });


    // Unique passport (if your business requires strict uniqueness) + soft-delete awareness
    //CandidateSchema.index({ passportNo: 1 }, { unique: true, partialFilterExpression: { isDeleted: { $eq: false } } });


    module.exports = mongoose.model('Candidate', CandidateSchema);