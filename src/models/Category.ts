import { Schema, model, models, type InferSchemaType } from "mongoose";

const CategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 100,
        },
        description: {
            type: String,
            trim: true,
            maxlength: 500,
            default: "",
        },
    },
    {
        timestamps: true,
    },
);

CategorySchema.index({ name: 1 }, { unique: true });

export type CategoryDocument = InferSchemaType<typeof CategorySchema>;

export const Category = models.Category || model("Category", CategorySchema);
