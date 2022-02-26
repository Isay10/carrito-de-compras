import { profileDummy } from "../dummys/profiles";

export const userService = {
  getUsers,
};

function getUsers() {
  return profileDummy.profile;
}
