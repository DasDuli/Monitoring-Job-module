import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div class="list">
      <div class="contact-list">Job Name</div>
      <div class="contact" *ngFor="let contact of contactInitials">
        <div class="k-hbox">
          <div>
            <h2>{{ contact.name }}</h2>
            <p>{{ contact.position }}</p>
          </div>
        </div>
      </div>
      <button kendoButton class="kendoButton" (click)="onButtonClick()">Show More</button>
    </div>
  `,
  styles: [
    `
      .contact {
        padding: 8px 14px;
        margin-bottom: 4px;
        box-shadow: 0 1px 2px #ccc;
      }
      .contact h2 {
        font-size: 1.3em;
        font-weight: normal;
        margin: 0;
      }
      .contact p {
        margin: 0;
        font-size: 0.8em;
      }
      .k-hbox div {
        margin-left: 1em;
      }
      .mate-info {
        display: inline-block;
        vertical-align: top;
      }
      .list {
        width: 280px;
        margin: auto;
        padding: 4px 10px;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.26),
          0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08);
        border: 4px solid lightgreen;
      }
      .contact-list {
        text-align: center;
        padding: 4px;
        font-size: 20px;
      }
      .kendoButton {
        padding: 8px 90px;
        margin-bottom: 4px;
        box-shadow: 0 1px 2px #ccc;
      }
    `
  ]
})
export class AppComponent {
  
  public contactInitials: Array<any> = [
    {  name: "Last Run", position: "00/00/000 00:00" },
    {  name: "Duration", position: "0 h 0 min 0 sec" },
    {  name: "Job Status", position: "Succesfull" },
  ];
}
