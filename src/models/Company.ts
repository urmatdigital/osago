import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  workingHours: {
    type: String,
    required: true,
  },
  features: [{
    type: String,
  }],
  // Поля для аутентификации
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'company'],
    default: 'company',
  },
}, {
  timestamps: true,
});

export default mongoose.models.Company || mongoose.model('Company', companySchema);
