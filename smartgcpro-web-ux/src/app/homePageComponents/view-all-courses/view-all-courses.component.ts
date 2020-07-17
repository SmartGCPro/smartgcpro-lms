import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../services/common-service.service';
@Component({
  selector: 'app-view-all-courses',
  templateUrl: './view-all-courses.component.html',
  styleUrls: ['./view-all-courses.component.css']
})
export class ViewAllCoursesComponent implements OnInit {
  // coursesList;
  constructor(private service: CommonServiceService) { }
  maxStars = 5;
  ngOnInit(): void {
    // this.getCourses();
  }


  // getCourses() {
  //   this.service.getCourses().subscribe(
  //     data => {
  //       this.coursesList = data;
  //     }
  //   );
  // }


 
  coursesList = [
    {
      "imageUrl": "../../../assets/courseImage.png",
      "courseTitle": "Yoga for Powerful Memory",
      "rating":4.5,
      "vendoeName":'Saketh',
      "totalReviews":1200,
      "price":12000,
      "discount":3000
    },
    {
      "imageUrl": "../../../assets/courseImage.png",
      "courseTitle": "Yoga for Powerful Memory",
      "rating":4.5,
      "vendoeName":'Saketh',
      "totalReviews":1200,
      "price":12000,
      "discount":3000
    },
    {
      "imageUrl": "../../../assets/courseImage.png",
      "courseTitle": "Yoga for Powerful Memory",
      "rating":4.5,
      "vendoeName":'Saketh',
      "totalReviews":1200,
      "price":12000,
      "discount":3000
    },
    {
      "id": "4",
      "imageUrl": "../../../assets/courseImage.png",
      "courseTitle": "Yoga for Powerful Memory",
      "rating":4.5,
      "vendoeName":'Saketh',
      "totalReviews":1200,
      "price":12000,
      "discount":3000
    },
    {
      "imageUrl": "../../../assets/courseImage.png",
      "courseTitle": "Yoga for Powerful Memory",
      "rating":4.5,
      "vendoeName":'Saketh',
      "totalReviews":1200,
      "price":12000,
      "discount":3000
    },
    {
      "imageUrl": "../../../assets/courseImage.png",
      "courseTitle": "Yoga for Powerful Memory",
      "rating":4.5,
      "vendoeName":'Saketh',
      "totalReviews":1200,
      "price":12000,
      "discount":3000
    },
    {
      "imageUrl": "../../../assets/courseImage.png",
      "courseTitle": "Yoga for Powerful Memory",
      "rating":4.5,
      "vendoeName":'Saketh',
      "totalReviews":1200,
      "price":12000,
      "discount":3000
    },   {
      "imageUrl": "../../../assets/courseImage.png",
      "courseTitle": "Yoga for Powerful Memory",
      "rating":4.5,
      "vendoeName":'Saketh',
      "totalReviews":1200,
      "price":12000,
      "discount":3000
    },
  ];



}
