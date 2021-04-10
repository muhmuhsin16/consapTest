import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { DropdownCountryComponent } from "./dropdown-country";

@NgModule({
    imports:[FormsModule,
        BrowserModule,
    ],
    declarations:[
        DropdownCountryComponent,
    ],
    exports:[
        DropdownCountryComponent,
    ],
    providers:[]
})

export class ShareModule {
}