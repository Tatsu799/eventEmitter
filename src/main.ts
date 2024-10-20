import { EventEmitter } from './event-emitter';

class EventTest {
  private eventEmitter: EventEmitter;

  constructor() {
    this.eventEmitter = new EventEmitter();

    this.setEvents();
    // this.eventEmitter.emitEventOnce('newEvent1');
    this.eventEmitter.emitEvent('newEvent1');
    this.eventEmitter.emitEvent('newEvent2');

    // this.eventEmitter.removeEvent('newEvent1', this.newEvent1);
    // this.eventEmitter.removeAllEvens();
    console.log(this.eventEmitter);
  }

  private setEvents() {
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
