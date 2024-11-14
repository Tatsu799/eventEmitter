export class EventEmitter<T extends Record<string, any[]>> {
  private event: { [K in keyof T]?: Array<{ listener: (...args: T[K]) => void; once: boolean }> } = {};
  /**イベント追加*
   * @param eventName - 登録するイベント名
   * @param listener - イベント発火時に実行されるリスナー関数
   * @param once - 一度だけ実行するためのフラグ（デフォルト = false）
   */
  addEvent<K extends keyof T>(eventName: K, listener: (...args: T[K]) => void, once = false): void {
    (this.event[eventName] ??= []).push({ listener, once });

    //別の書き方　一度代入してからlistenerをpushする
    // const listeners = this.event[eventName] || [];
    // listeners.push({ listener, once });
    // this.event[eventName] = listeners;
  }

  /**イベントの削除
   * @param eventName - 登録するイベント名
   * @param listener - イベント発火時に実行されるリスナー関数
   */
  removeEvent<K extends keyof T>(eventName: K, listener: (...args: T[K]) => void): void {
    const listeners = this.event[eventName];
    if (!listeners) return;
    //削除したいイベント以外の要素の配列を作成
    this.event[eventName] = listeners.filter((event) => event.listener !== listener);
  }

  /**全てのイベントの削除
   */
  removeAllEvens(): void {
    this.event = {};
  }

  emitEvent<K extends keyof T>(eventName: K, ...args: T[K]): void {
    const listeners = this.event[eventName];
    if (!listeners) return;

    this.event[eventName] = listeners.filter(({ listener, once }) => {
      listener(...args);
      return !once;
    });
  }
}

// export class EventEmitter {
//   private event: { [eventName: string]: ((...args: any[]) => void)[] } = {};

//   /*イベント追加*/
//   addEvent(eventName: string, listener: (...args: any[]) => void): void {
//     if (!this.event[eventName]) {
//       this.event[eventName] = [];
//     }
//     this.event[eventName].push(listener);
//   }

//   /*イベントの削除*/
//   removeEvent(eventName: string, listener: (...args: any[]) => void): void {
//     const listeners = this.event[eventName];
//     if (!listeners) return;
//     //削除したいイベント以外の要素の配列を作成
//     this.event[eventName] = this.event[eventName].filter((event) => event !== listener);

//     //イベントがなくなったら削除
//     if (this.event[eventName].length === 0) {
//       delete this.event[eventName];
//     }
//   }

//   /*全てのイベントの削除*/
//   removeAllEvens(): void {
//     this.event = {};
//   }

//   /*イベント発火*/
//   emitEvent(eventName: string, ...args: any[]): void {
//     const listeners = this.event[eventName];
//     if (listeners) {
//       this.event[eventName].forEach((event) => event(...args));
//     }
//   }

//   /*一度だけイベント発火*/
//   emitEventOnce(eventName: string, ...args: any[]) {
//     const listeners = this.event[eventName];

//     if (listeners) {
//       this.event[eventName].forEach((event) => event(...args));
//       delete this.event[eventName];
//     }
//   }
// }
