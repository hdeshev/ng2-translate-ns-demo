import {TranslateLoader} from 'ng2-translate/ng2-translate';
import {Observable} from 'rxjs/Observable'
import {Injectable} from 'angular2/core'

@Injectable()
export class StaticFilesLoader implements TranslateLoader {
    constructor() {
        console.log('STATICFILESLOADER');
    }

    public getTranslation(lang: String): Observable<any> {
        console.log('getTranslation!');
        return Observable.of({
            LOVE_TECH: 'I love technology',
        });
    }
}
