const mongoose = require('mongoose');

const ClothestSchema = new mongoose.Schema({   
    code:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    entryAt:{
        type:Date,
        default: Date.now,
        required: true
    },
    saleValue:{
        type: Number,
        required: true
    },
    purchaseValue:{
        type: Number,
        required: true
    },
    type:{
        type: String,
        enum : ['Vestido','Saia','Conjunto','Blusa','Calça'],
        default: 'Blusa',
        required: true
    },
    brand:{
        type: String,
        enum : ['Polo','Tommy','Forever','Levis'],
        default: 'Polo',
        required: true
    },
    margin:{
        type: Number,
        default: function() {            
            return this.purchaseValue * 2;
        }
    },
    features:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});

mongoose.model('Clothes',ClothestSchema);