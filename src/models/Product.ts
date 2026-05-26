import {
    Schema,
    model,
    models,
    type InferSchemaType,
    type Types,
} from "mongoose";

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 150,
        },
        description: {
            type: String,
            trim: true,
            maxlength: 2000,
            default: "",
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
            default: 0,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

ProductSchema.index({ name: 1, category: 1 }, { unique: true });

export type ProductDocument = Omit<InferSchemaType<typeof ProductSchema>, "category"> & {
    category: Types.ObjectId;
};

export const Product = models.Product || model("Product", ProductSchema);
