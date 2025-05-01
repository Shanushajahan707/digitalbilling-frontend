import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: false,
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  @ViewChildren('videoElements') videoElementsRef!: QueryList<ElementRef<HTMLVideoElement>>;

  currentVideoIndex: number = 0;

  videos: any[] = [
    {
      src: 'videos/rental.mp4',
      title: 'Rental Collection',
      description: 'Explore premium rental jewellery curated for every occasion.'
    },
    {
      src: 'videos/Bangles.mp4',
      title: 'Bangles Essentials',
      description: 'A colorful range of bangles to match every outfit and mood.'
    },
    {
      src: 'videos/RegularJewellery.mp4',
      title: 'Regular Jewellery',
      description: 'Elegant everyday wear jewellery designed to shine subtly.'
    },
    {
      src: 'videos/Cosmetics.mp4',
      title: 'Cosmetics',
      description: 'Discover trending cosmetic picks for a flawless glow.'
    }
  ];
  

  private videoElements: ElementRef<HTMLVideoElement>[] = [];
  private autoplayInterval: any;

  ngAfterViewInit(): void {

    this.videoElements = this.videoElementsRef.toArray();
  
    // Ensure all videos are muted
    this.videoElements.forEach(videoRef => {
      if (videoRef?.nativeElement) {
        videoRef.nativeElement.muted = true;  
      }
    });
    this.initVideoListeners();
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  setCurrentVideo(index: number): void {
    this.currentVideoIndex = index;
  
    // Pause all videos first
    this.videoElements.forEach((videoRef) => {
      const video = videoRef.nativeElement;
      video.pause();
      video.currentTime = 0; // Reset video
    });
  
    // Now play the selected video
    const selectedVideo = this.videoElements[index]?.nativeElement;
    if (selectedVideo) {
      selectedVideo.play().catch(err => {
        console.error('Error playing video:', err);
        // As fallback: mute and retry
        selectedVideo.muted = true;
        selectedVideo.play().catch(e => console.error('Retry failed:', e));
      });
    }
  
    this.resetAutoplayTimer();
  }
  

  private initVideoListeners(): void {
    this.videoElements.forEach((videoRef, index) => {
      const video = videoRef.nativeElement;

      video.addEventListener('loadeddata', () => {
        console.log(`Video ${index + 1} loaded successfully`);
      });

      video.addEventListener('error', (err) => {
        console.error(`Error loading video ${index + 1}:`, err);
        this.setFallbackBackground(index);
      });

      video.addEventListener('ended', () => {
        if (index === this.currentVideoIndex) {
          this.advanceToNextVideo();
        }
      });
    });
  }

  private startAutoplay(): void {
    const firstVideo = this.videoElements[0]?.nativeElement;
    if (firstVideo) firstVideo.play();

    this.autoplayInterval = setInterval(() => {
      this.advanceToNextVideo();
    }, 8000);
  }

  private advanceToNextVideo(): void {
    const nextIndex = (this.currentVideoIndex + 1) % this.videos.length;
    this.setCurrentVideo(nextIndex);
  }

  private resetAutoplayTimer(): void {
    clearInterval(this.autoplayInterval);
    this.autoplayInterval = setInterval(() => {
      this.advanceToNextVideo();
    }, 8000);
  }

  private setFallbackBackground(index: number): void {
    const parentElement = this.videoElements[index]?.nativeElement?.parentElement;
    if (parentElement) {
      parentElement.classList.add('bg-gradient-to-r', 'from-pink-500', 'to-purple-600');
    }
  }
}
