import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  VERSION,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle(`Our Skills ${VERSION.full}`);
  }
}
