import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleService } from '../header/toggle.service';
import { CustomizerSettingsService } from 'src/app/views/layout/components/customizer-settings/customizer-settings.service';

@Component({
  selector: 'app-layout-index',
  templateUrl: './layout-index.component.html',
  styleUrls: ['./layout-index.component.scss']
})
export class LayoutIndexComponent {
  title = 'Tagus - Material Design Angular Admin Dashboard Template';

  isToggled = false;

  constructor(
    public router: Router,
    private toggleService: ToggleService,
    public themeService: CustomizerSettingsService
  ){
    this.toggleService.isToggled$.subscribe(isToggled => {
      this.isToggled = isToggled;
  });
  }

  toggleRightSidebarTheme() {
    this.themeService.toggleRightSidebarTheme();
}

toggleHideSidebarTheme() {
    this.themeService.toggleHideSidebarTheme();
}

toggleCardBorderTheme() {
    this.themeService.toggleCardBorderTheme();
}

toggleTheme() {
    this.themeService.toggleTheme();
}

toggleCardBorderRadiusTheme() {
    this.themeService.toggleCardBorderRadiusTheme();
}

toggleRTLEnabledTheme() {
    this.themeService.toggleRTLEnabledTheme();
}
}
