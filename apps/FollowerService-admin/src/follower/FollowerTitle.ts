import { Follower as TFollower } from "../api/follower/Follower";

export const FOLLOWER_TITLE_FIELD = "id";

export const FollowerTitle = (record: TFollower): string => {
  return record.id?.toString() || String(record.id);
};
