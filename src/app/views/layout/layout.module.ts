import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutIndexComponent } from './components/layout-index/layout-index.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { ToggleService } from './components/header/toggle.service';
import { HeaderComponent } from './components/header/header.component';
import { CustomizerSettingsComponent } from 'src/app/views/layout/components/customizer-settings/customizer-settings.component';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { FmSidebarComponent } from './components/file-manager/fm-sidebar/fm-sidebar.component';



@NgModule({
  declarations: [
    LayoutIndexComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    CustomizerSettingsComponent,
    FileManagerComponent,
    FmSidebarComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
    
  ]
})
export class LayoutModule { }
