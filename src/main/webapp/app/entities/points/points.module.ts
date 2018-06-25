import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterMiniBookSharedModule } from 'app/shared';
import { JhipsterMiniBookAdminModule } from 'app/admin/admin.module';
import {
    PointsComponent,
    PointsDetailComponent,
    PointsUpdateComponent,
    PointsDeletePopupComponent,
    PointsDeleteDialogComponent,
    pointsRoute,
    pointsPopupRoute
} from './';

const ENTITY_STATES = [...pointsRoute, ...pointsPopupRoute];

@NgModule({
    imports: [JhipsterMiniBookSharedModule, JhipsterMiniBookAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [PointsComponent, PointsDetailComponent, PointsUpdateComponent, PointsDeleteDialogComponent, PointsDeletePopupComponent],
    entryComponents: [PointsComponent, PointsUpdateComponent, PointsDeleteDialogComponent, PointsDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterMiniBookPointsModule {}
