import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { Title } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';
describe('AppComponent', () => {
  async function setup() {
    await render(AppComponent);

    const titleService = TestBed.inject(Title);

    return { titleService };
  }

  it('contains the correct header title', async () => {
    const { titleService } = await setup();
    expect(titleService.getTitle()).toContain('Our Skills');
  });
});
