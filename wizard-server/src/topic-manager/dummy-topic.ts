import { Topic } from './interfaces';

export class DummyTopic implements Topic {

  public async publish(message) {
    console.log(message);
  }

  public async destroy() {

  }

  public get status(): 'INIT' | 'READY' | 'CLOSING' {
    return 'READY';
  }
}
