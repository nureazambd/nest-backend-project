import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ItemDocument = Item & Document;
@Schema()
export class Item extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  qty: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
