import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterMiniBookSharedModule } from 'app/shared';
import { JhipsterMiniBookAdminModule } from 'app/admin/admin.module';
import {
    PreferencesComponent,
    PreferencesDetailComponent,
    PreferencesUpdateComponent,
    PreferencesDeletePopupComponent,
    PreferencesDeleteDialogComponent,
    preferencesRoute,
    preferencesPopupRoute
} from './';

const ENTITY_STATES = [...preferencesRoute, ...preferencesPopupRoute];

@NgModule({
    imports: [JhipsterMiniBookSharedModule, JhipsterMiniBookAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PreferencesComponent,
        PreferencesDetailComponent,
        PreferencesUpdateComponent,
        PreferencesDeleteDialogComponent,
        PreferencesDeletePopupComponent
    ],
    entryComponents: [PreferencesComponent, PreferencesUpdateComponent, PreferencesDeleteDialogComponent, PreferencesDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterMiniBookPreferencesModule {}
