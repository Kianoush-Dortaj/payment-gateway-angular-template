import { Component } from '@angular/core';
import { CustomizerSettingsService } from 'src/app/views/layout/components/customizer-settings/customizer-settings.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent {

  constructor(
    public themeService: CustomizerSettingsService
) {}

}
