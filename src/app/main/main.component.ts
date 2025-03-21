import { Component } from '@angular/core';

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [],
    templateUrl: './main.component.html',
    styleUrl: './main.component.css'
})

export class MainComponent {
    text = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'
}
