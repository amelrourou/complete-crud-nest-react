import { DisplayUser } from './DisplayUser.interface';

module.exports = {
  DecodedJwt: {
    user: DisplayUser.DisplayUser,
    exp: Number,
    iat: Number,
  },
};
