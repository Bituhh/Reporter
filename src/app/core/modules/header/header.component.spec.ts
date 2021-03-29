import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MatButtonHarness} from '@angular/material/button/testing';
import {MatDialog} from '@angular/material/dialog';
import {MatToolbarHarness} from '@angular/material/toolbar/testing';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AuthComponent} from '../auth/auth.component';
import {HeaderMaterialModule} from './header-material.module';
import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let loader: HarnessLoader;
  let matDialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        NoopAnimationsModule,
        HeaderMaterialModule,
      ],
      providers: [
        MatDialog,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    matDialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Template', () => {
    it('should have a toolbar', async () => {
      const toolbar = await loader.getHarness<MatToolbarHarness>(MatToolbarHarness.with({
        selector: '[data-test-id="toolbar"]',
      }));

      expect(toolbar).toBeTruthy();
    });

    it('should have a name', () => {
      const title: HTMLElement = fixture.debugElement.query(By.css('[data-test-id="app-title"]')).nativeElement;

      expect(title.innerText).toEqual('App Name');
    });

    describe('auth-button', () => {
      it('should exist', async () => {
        const loginButton = await loader.getHarness<MatButtonHarness>(MatButtonHarness.with({
          selector: '[data-test-id="auth-button"]',
        }));

        expect(loginButton).toBeTruthy();
      });

      it('should call onLogin', async () => {
        const spy = spyOn(component, 'onLogin');
        const loginButton = await loader.getHarness<MatButtonHarness>(MatButtonHarness.with({
          selector: '[data-test-id="auth-button"]',
        }));

        await loginButton.click();

        expect(spy).toHaveBeenCalled();
      });
    });
  });

  describe('Script', () => {
    describe('onLogin', () => {
      it('should call matDialog open', () => {
        const spy = spyOn(matDialog, 'open');

        component.onLogin();

        expect(spy).toHaveBeenCalledOnceWith(AuthComponent);
      });
    });
  });
});
