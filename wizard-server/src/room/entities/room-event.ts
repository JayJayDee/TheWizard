
type RoomEventType = 
  'JOIN' |
  'LEAVE' |
  'DEAL_CARD'

export class BaseRoomEventEntity {

  constructor({
    type
  }: {
    type: RoomEventType
  }) {
    this._type = type;
  }

  private _type: RoomEventType;

  public get type() {
    return this._type;
  }
}
