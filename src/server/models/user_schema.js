const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'E-mail é obrigatório'],
        unique: [true, 'E-mail já cadastrado'],
        lowercase: true,
        trim: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'E-mail inválido'],
    },
    password: {
        type: String,
        required: [true, 'Senha é obrigatória'],
        minlength: 8,
    },
    role: { // defiinindo a role do usuário
        type: String,
        enum: ['admin', 'user'], // definindo valores a serem cadastrados dentro desse campo
        default: 'user',
    },
    isVerified: { // verifica se o usuário foi verificado
        type: Boolean,
        default: false,
    },

    // esses por padrão são campos que irão ser preenchidos caso tenha a tentativa de resetar a senha
    resetPasswordToken: String, // token para resetar a senha
    resetPasswordExpires: Date, // data de expiração do token
})

// 🔒 Hash da senha antes de salvar
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next() // Se a senha NÃO foi alterada, pula o hashing
    const salt = await bcrypt.genSalt(10) // Gera um salt (valor aleatório)
    this.password = await bcrypt.hash(this.password, salt) // Usa o salt gerado para criptografar a senha do usuário
    next()
})