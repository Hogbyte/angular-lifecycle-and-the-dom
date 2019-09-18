import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

interface IEventRow {
  eventName: string;
  currentCssClass: string;
  buttonHtml: string;
  domCssClass: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, OnInit {
  currentCssClass = 'blue';
  eventRows: IEventRow[] = [];

  onToggleCssClassClick(): void {
    this.eventRows = [];
    this.currentCssClass = (this.currentCssClass === 'blue') ? 'red' : 'blue';
    this.addEventRow("onToggleCssClassClick");
    setTimeout(() => { this.addEventRow("after:setTimeout"); })
  }

  onReloadClick(): void {
    window.location.reload();
  }

  ngOnChanges(): void { this.addEventRow("ngOnChanges"); }
  ngOnInit(): void { this.addEventRow("ngOnInit"); }
  ngDoCheck(): void { this.addEventRow("ngDoCheck"); }
  ngAfterContentInit(): void { this.addEventRow("ngAfterContentInit"); }
  ngAfterContentChecked(): void { this.addEventRow("ngAfterContentChecked"); }
  ngAfterViewInit(): void { this.addEventRow("ngAfterViewInit"); }
  ngAfterViewChecked(): void { this.addEventRow("ngAfterViewChecked"); }
  ngOnDestroy(): void { this.addEventRow("ngOnDestroy"); }

  private addEventRow(eventName: string): void {
    let buttonElement: HTMLElement | null = document.getElementById("btnTest");
    let buttonHtml: string = (buttonElement !== null) ? buttonElement.outerHTML : "N/A";
    let domCssClass: string = (buttonElement !== null) ? buttonElement.className : "";
    this.eventRows.push({ eventName, currentCssClass: this.currentCssClass, buttonHtml, domCssClass });
  }
}
