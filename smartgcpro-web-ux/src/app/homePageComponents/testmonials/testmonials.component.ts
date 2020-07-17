import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testmonials',
  templateUrl: './testmonials.component.html',
  styleUrls: ['./testmonials.component.css'],
})
export class TestmonialsComponent implements OnInit {
  // testmonialList;
  maxStars = 5;
  activeSlides: SlidesOutputData;
  constructor(private service: CommonServiceService) {}

  ngOnInit(): void {
    // this.getTestmonials();
  }

  // getTestmonials() {
  //   this.service.getTestmonials().subscribe(
  //     data => {
  //       this.testmonialList = data;
  //     }
  //   );
  // }

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  slidesStore = [
    {
      id: '1',
      imageUrl: '../../../assets/sundarpichai.png',
    },
    {
      id: '2',
      imageUrl: '../../../assets/courseImage.png',
    },
    {
      id: '3',
      imageUrl: '../../../assets/courseImage.png',
    },
    {
      id: '4',
      imageUrl: '../../../assets/courseImage.png',
    },
    {
      id: '5',
      imageUrl: '../../../assets/courseImage.png',
    },
    {
      id: '6',
      imageUrl: '../../../assets/courseImage.png',
    },
    {
      id: '7',
      imageUrl: '../../../assets/courseImage.png',
    },
  ];

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
}
