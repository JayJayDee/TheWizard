import { RoomEntity, UserEntity } from '../../entities';

export interface RoomService {

  findRooms: () => Promise<RoomEntity[]>;

  createRoom: ({ room }: {
    room: RoomEntity
  }) => Promise<RoomEntity>;

  joinRoom: ({ room, user }: {
    room: RoomEntity,
    user: UserEntity
  }) => Promise<void>; // TODO: result must be replaced
}