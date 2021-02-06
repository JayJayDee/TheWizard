
export interface TopicManager {

  /**
   * creates a topic with an unique topic name
   * @param topicName name of topic
   */
  createTopic(topicName: string): Promise<Topic>;

  /**
   * find a topic with given name
   * @param topicName name of topic
   */
  findTopic(topicName: string): Promise<Topic | null>;
}

export interface Topic {

  /**
   * publish message to each topic
   * @param message message which wants to send
   */
  publish(message: any): Promise<void>;

  /**
   * destroys the topic
   */
  destroy(): Promise<void>;

  /**
   * returns the status of topic
   */
  status: 'INIT' | 'READY' | 'CLOSING';
}
