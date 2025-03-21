import { Component } from '@angular/core';

@Component({
    selector: 'app-part-top',
    standalone: true,
    imports: [],
    templateUrl: './part-top.component.html',
    styleUrl: './part-top.component.css'
})

export class PartTopComponent {
    text = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
}