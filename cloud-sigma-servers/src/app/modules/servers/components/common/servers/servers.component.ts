import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

import { IServer } from '../../../models/servers.interface'; // TODO: use path aliasing

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServersComponent {
  @Input() public servers: IServer[];
  @Output() public triggerViewServerDetails = new EventEmitter<MatSelectionListChange>();

  public viewServerDetails(event: MatSelectionListChange): void {
    this.triggerViewServerDetails.emit(event);
  }

  public trackByAlphaCode(index: number, server: IServer) {
    return server ? server.uuid : null;
  }
}
