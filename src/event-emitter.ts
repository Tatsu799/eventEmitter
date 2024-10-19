export class EventEmitter {
  private event: { [eventName: string]: Array<(...args: any[]) => void> } = {};

  /*イベント追加*/
  addEvent(eventName: string, listener: (...args: any[]) => void): void {
    if (!this.event[eventName]) {
      this.event[eventName] = [];
    }
    this.event[eventName].push(listener);
  }

  /*イベントの削除*/
  removeEvent(eventName: string, listener: (...args: any[]) => void): void {
    if (!this.event[eventName]) return;
    //削除したいイベント以外の要素の配列を作成
    this.event[eventName] = this.event[eventName].filter((event) => event !== listener);
    if (this.event[eventName].length < 1) {
      delete this.event[eventName];
    }
  }

  /*全てのイベントの削除*/
  removeAllEvens(): void {
    this.event = {};
  }

  /*イベント発火*/
  emitEvent(eventName: string, ...args: any[]) {
    if (!this.event[eventName]) return;
    this.event[eventName].forEach((event) => event(...args));
  }

  /*一度だけイベント発火*/
  emitEventOnce(eventName: string, ...args: any[]) {
    if (!this.event[eventName]) return;

    this.event[eventName].forEach((event) => event(...args));
    delete this.event[eventName];
  }
}
