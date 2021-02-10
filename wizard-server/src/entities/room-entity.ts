import { Identifiable } from './identifiable';

/**
 * Entity for room
 */
export class RoomEntity implements Identifiable<String> {

  private _id: string;

  constructor({
    id
  }: {
    id: string
  }) {
    this._id = id;
  }

  public get id() {
    return this._id;
  }
}
