import { injectable } from 'inversify';

import { DummyTopic } from './dummy-topic';
import { TopicManager } from './interfaces';

@injectable()
export class DummyTopicManager implements TopicManager {

  public async createTopic(topicName) {
    const dummyTopic = new DummyTopic();
    return dummyTopic;    
  }
  
  public async findTopic(topicName) {
    const dummyTopic = new DummyTopic();
    return dummyTopic;
  }
}
