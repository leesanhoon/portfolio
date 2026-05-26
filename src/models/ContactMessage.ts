import { Schema, model, models, type InferSchemaType } from "mongoose";

const ContactMessageSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 100,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            maxlength: 160,
        },
        message: {
            type: String,
            required: true,
            trim: true,
            minlength: 5,
            maxlength: 2000,
        },
    },
    {
        timestamps: true,
    },
);

export type ContactMessageDocument = InferSchemaType<typeof ContactMessageSchema>;

export const ContactMessage =
    models.ContactMessage || model("ContactMessage", ContactMessageSchema);
