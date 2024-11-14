import { EventEmitter } from './event-emitter';

interface Events {
  [key: string]: any[];
  // newEvent1: [];
  // newEvent2: [];
}

class EventTest {
  private eventEmitter: EventEmitter<Events>;

  constructor() {
    this.eventEmitter = new EventEmitter<Events>();

    this.setEvents();
    this.eventEmitter.emitEvent('newEventOnce');
    // this.eventEmitter.emitEvent('newEvent1');
    // this.eventEmitter.emitEvent('newEvent2');
    this.eventEmitter.emitEvent('newEventOnce');
    // this.eventEmitter.emitEvent('newEvent1');

    // this.eventEmitter.removeEvent('newEvent1', this.newEvent1);
    // this.eventEmitter.removeAllEvens();
    console.log(this.eventEmitter);
  }

  private setEvents() {
    this.eventEmitter.addEvent('newEventOnce', this.newEvent1, true);
    this.eventEmitter.addEvent('newEvent1', this.newEvent1);
    this.eventEmitter.addEvent('newEvent2', this.newEvent2);
  }

  private newEvent1() {
    console.log('イベント1発火');
  }

  private newEvent2() {
    console.log('イベント2発火');
  }
}

const eventTest = new EventTest();
eventTest;
