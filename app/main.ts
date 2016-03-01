// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from 'angular2/http';
import {Component, Injectable, provide} from 'angular2/core';
import {TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {StaticFilesLoader} from "./static-files-loader";

nativeScriptBootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(TranslateLoader, {useClass: StaticFilesLoader}),
    TranslateService,
]);
