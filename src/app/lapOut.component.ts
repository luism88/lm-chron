import { Component, Input } from '@angular/core';

@Component({
    selector: 'lapOut',
    templateUrl: './lapOut.component.html',
    styleUrls: ['./lapOut.component.css']
})
export class LapOutComponent {
    position : number;
    @Input() lstLapTime : string[];
    
    constructor() {
        
    }
}