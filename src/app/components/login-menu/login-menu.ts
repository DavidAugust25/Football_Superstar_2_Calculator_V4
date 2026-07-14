import { AfterViewInit, Component, ElementRef, Inject, NgZone, OnDestroy, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login-menu',
  imports: [],
  templateUrl: './login-menu.html',
  styleUrl: './login-menu.css',
})
export class LoginMenu implements AfterViewInit, OnDestroy {
  private autoPlayTimer: number | undefined;
  protected currentSlide = 0;
  private slides: HTMLElement[] = [];

  @ViewChild('carouselContainer', { read: ElementRef }) private carouselContainerRef?: ElementRef<HTMLElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: object, private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const toggleBtn = document.getElementById('toggle-menu-btn');
    const presentationMenu = document.getElementById('presentation');

    if (toggleBtn && presentationMenu) {
      toggleBtn.addEventListener('click', () => {
        presentationMenu.classList.toggle('hidden');
      });
    }

    this.slides = Array.from(this.carouselContainerRef?.nativeElement.querySelectorAll<HTMLElement>('.carousel-slide') ?? []);

    if (this.slides.length > 0) {
      this.showSlide(0);
      this.startTimer();
    }
  }

  ngOnDestroy(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }

  onNext(): void {
    this.showSlide(this.currentSlide + 1);
    this.resetTimer();
  }

  onPrev(): void {
    this.showSlide(this.currentSlide - 1);
    this.resetTimer();
  }

  onLoginSubmit(event: Event): void {
    event.preventDefault();

    const inputName = (document.getElementById('name') as HTMLInputElement | null)?.value.trim() ?? '';
    const inputSurname = (document.getElementById('surname') as HTMLInputElement | null)?.value.trim() ?? '';
    const inputPassword = (document.getElementById('password') as HTMLInputElement | null)?.value ?? '';

    if (inputName === 'Gabriel' && inputSurname === 'Cancio' && inputPassword === '123456') {
      alert('Login Successful! Welcome, Gabriel Cancio.');
    } else {
      alert('Access Denied: Invalid name, surname, or password.');
    }
  }

  createAccount(): void {
    alert('Account Created! (Mockup)');
  }

  deleteAccount(): void {
    alert('Account Deleted! (Mockup)');
  }

  private showSlide(nextIndex: number): void {
    if (this.slides.length === 0) {
      return;
    }

    this.slides[this.currentSlide]?.classList.remove('active');
    this.currentSlide = (nextIndex + this.slides.length) % this.slides.length;
    this.slides[this.currentSlide]?.classList.add('active');
  }

  private startTimer(): void {
    this.ngZone.runOutsideAngular(() => {
      this.autoPlayTimer = window.setInterval(() => {
        this.showSlide(this.currentSlide + 1);
      }, 1500);
    });
  }

  private resetTimer(): void {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
    this.startTimer();
  }
}
