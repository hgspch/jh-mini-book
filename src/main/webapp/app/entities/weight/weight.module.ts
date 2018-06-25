import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterMiniBookSharedModule } from 'app/shared';
import { JhipsterMiniBookAdminModule } from 'app/admin/admin.module';
import {
    WeightComponent,
    WeightDetailComponent,
    WeightUpdateComponent,
    WeightDeletePopupComponent,
    WeightDeleteDialogComponent,
    weightRoute,
    weightPopupRoute
} from './';

const ENTITY_STATES = [...weightRoute, ...weightPopupRoute];

@NgModule({
    imports: [JhipsterMiniBookSharedModule, JhipsterMiniBookAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [WeightComponent, WeightDetailComponent, WeightUpdateComponent, WeightDeleteDialogComponent, WeightDeletePopupComponent],
    entryComponents: [WeightComponent, WeightUpdateComponent, WeightDeleteDialogComponent, WeightDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterMiniBookWeightModule {}
