const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    richDescription: {
        type: String,
        default: ""
    },

    image: [
        {
            type: String
        }
    ],
    brand: {
        type: String,
        default: ""
    },
    price: {
        type: String,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    rating: {
        type: Number,
        default: 0
    },
    numRevires: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    dataCreated: {
        type: Date,
        default: Date.now
    }

});

productSchema.virtual("id").get(()=>{
    return this._id.toHexString();
});
productSchema.set("toJSON", {
    virtualS:true,
})


exports.Product = mongoose.model('Product', productSchema);
