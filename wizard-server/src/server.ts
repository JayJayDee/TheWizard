import 'reflect-metadata';

import { Container } from 'inversify';
import { Interfaces, Symbols } from './modules';
import { DummyTopicManager } from './topic-manager';

(async () => {
  const container = new Container();
  container.bind<Interfaces.TopicManager>(Symbols.TopicManager).to(DummyTopicManager);

  const topicMgr = container.get<Interfaces.TopicManager>(Symbols.TopicManager);

  const topic = await topicMgr.createTopic('test');
  console.log(topic);
})();
