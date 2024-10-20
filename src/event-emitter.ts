export class EventEmitter {
  private event: { [eventName: string]: ((...args: any[]) => void)[] } = {};

  /*イベント追加*/
  addEvent(eventName: string, listener: (...args: any[]) => void): void {
    if (!this.event[eventName]) {
      this.event[eventName] = [];
    }
    this.event[eventName].push(listener);
  }

  /*イベントの削除*/
  removeEvent(eventName: string, listener: (...args: any[]) => void): void {
    const listeners = this.event[eventName];
    if (!listeners) return;
    //削除したいイベント以外の要素の配列を作成
    this.event[eventName] = this.event[eventName].filter((event) => event !== listener);

    //イベントがなくなったら削除
    if (this.event[eventName].length === 0) {
      delete this.event[eventName];
    }
  }

  /*全てのイベントの削除*/
  removeAllEvens(): void {
    this.event = {};
  }

  /*イベント発火*/
  emitEvent(eventName: string, ...args: any[]): void {
    const listeners = this.event[eventName];
    if (listeners) {
      this.event[eventName].forEach((event) => event(...args));
    }
  }

  /*一度だけイベント発火*/
  emitEventOnce(eventName: string, ...args: any[]) {
    const listeners = this.event[eventName];

    if (listeners) {
      this.event[eventName].forEach((event) => event(...args));
      delete this.event[eventName];
    }
  }
}
