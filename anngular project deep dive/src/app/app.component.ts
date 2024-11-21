import { Component } from '@angular/core';
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketComponent } from "./dashboard/ticket/ticket.component";
import { ServerStatusComponent } from "./dashboard/server-status/server-status.component";
import { HeaderComponent } from "./header/header.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [TrafficComponent, TicketComponent, ServerStatusComponent, HeaderComponent, DashboardItemComponent],
})
export class AppComponent {
  
}
