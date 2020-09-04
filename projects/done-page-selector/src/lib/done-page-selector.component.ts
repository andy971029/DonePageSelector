import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'done-page-selector',
  templateUrl: './done-page-selector.component.html',
  styleUrls: ['./done-page-selector.component.css']
})
export class DonePageSelectorComponent implements OnInit, OnChanges {
  /** 總筆數 */
  @Input() DataSum: number;

  /** 每頁筆數 */
  @Input() PageSize: number;

  /** 切換頁數事件 */
  @Output() PageChanged = new EventEmitter<number>();
  /** 頁數陣列 */
  pageItems = [];
  /** 總頁數 */
  PageSum = 1;
  /** 目前頁數 */
  CurrentPage = 1;
  constructor() { }

  ngOnInit() {
    this.SetPageData();
  }

  // 監聽變數改變
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.SetPageData();
  }

  // 處理頁數資料
  SetPageData() {
    if (this.DataSum === null || this.DataSum === undefined) {
      this.DataSum = 0;
    }
    if (this.PageSize === null || this.PageSize === undefined) {
      this.PageSize = 10;
    }
    let startPage = this.CurrentPage - 2;
    // 頁碼設定
    this.PageSum = Math.ceil(this.DataSum / this.PageSize);
    if (this.CurrentPage < 3) {
      startPage = 1;
    } else if (this.CurrentPage + 2 > this.PageSum) {
      if (this.PageSum - 4 > 0) {
        startPage = this.PageSum - 4;
      } else {
        startPage = 1;
      }
    }
    this.pageItems = [];
    for (let h = startPage; h <= startPage + 4; h++) {
      if (this.pageItems.includes(h) || h > this.PageSum) { continue; }
      this.pageItems.push(h);
    }
  }

  // 換頁
  PageChange(page: number) {
    if (page > this.PageSum || page < 1) {
      return;

    }
    this.PageChanged.emit(page);
    this.CurrentPage = page;
    this.SetPageData();
  }
}
