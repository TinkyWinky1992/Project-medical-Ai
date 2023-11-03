import { UserMiddleware } from './user.middleware';

describe('Middleware', () => {
  it('should be defined', () => {
    expect(new UserMiddleware()).toBeDefined();
  });
});
