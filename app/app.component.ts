import {Component, Inject, Injectable} from "angular2/core";
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

@Injectable()
@Component({
    selector: "my-app",
    pipes: [TranslatePipe],
    template: `
<StackLayout orientation="vertical">
    <Label [text]="'LOVE_TECH' | translate" class="title" (tap)="message = 'OHAI'"></Label>
</StackLayout>
`,
})
export class AppComponent {
    public message: string = "Hello, Angular!";

    constructor(@Inject(TranslateService) private translate: TranslateService) {
    //constructor() {
        this.translate.use("en");
    }
}
