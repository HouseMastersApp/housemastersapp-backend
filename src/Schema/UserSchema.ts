import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IUser } from 'src/Models/IUser';

export type userDocument = User & Document;

@Schema()
export class User implements IUser {
  @Prop([String, { required: true }])
  email: string;

  @Prop([String, { required: true }])
  pwdHash: string;

  @Prop([String, { required: false }])
  sessionID: string;

  @Prop([String, { required: true }])
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
