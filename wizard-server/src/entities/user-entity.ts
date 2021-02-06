
export class UserEntity {

  constructor({
    id, nick, profileImage, email
  }: {
    id: string,
    nick: string,
    profileImage: string,
    email?: string
  }) {
    this._id = id;
    this._nick = nick;
    this._profileImage = profileImage;
    this._email = email ? email : null;
  }

  private _id: string;
  private _nick: string;
  private _profileImage: string;
  private _email?: string;
  
  public get id() {
    return this._id;
  }

  public get nick() {
    return this._nick;
  }

  public get profileImage() {
    return this._profileImage;
  }

  public get email(): string | null {
    return this._email;
  }
}
