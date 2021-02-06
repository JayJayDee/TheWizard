import { TopicManager } from './interfaces';

import { DummyTopicManager } from './dummy-topic-manager';

export default {
  TopicManager: Symbol.for('TopicManager')
};

export {
  TopicManager,
  DummyTopicManager
};
