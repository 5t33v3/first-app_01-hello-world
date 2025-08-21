import {Component} from '@angular/core';
import {Home} from './home/home';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `
    <div class="container mt-5">
      <main>
        <a [routerLink]="['/']">
          <header class="brand-name">
            <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
          </header>
        </a>
        <nav>
          <a [routerLink]="['/contact']">Contact Me</a>
        </nav>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </main>
    </div>
  `,

  styleUrls: ['./app.css'],
})
export class App {
  title = 'Homes';
}
