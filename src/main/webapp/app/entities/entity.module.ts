import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterMiniBookPointsModule } from './points/points.module';
import { JhipsterMiniBookWeightModule } from './weight/weight.module';
import { JhipsterMiniBookBloodPressureModule } from './blood-pressure/blood-pressure.module';
import { JhipsterMiniBookPreferencesModule } from './preferences/preferences.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterMiniBookPointsModule,
        JhipsterMiniBookWeightModule,
        JhipsterMiniBookBloodPressureModule,
        JhipsterMiniBookPreferencesModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterMiniBookEntityModule {}
