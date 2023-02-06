import { MSubscriber } from './m-subscriber';
import { Subscriber } from './subscriber';

describe('MSubscriber', () => {
  it('should create an instance', () => {
    expect(new MSubscriber('V1', 'MUTATION', new Subscriber())).toBeTruthy();
  });
});
