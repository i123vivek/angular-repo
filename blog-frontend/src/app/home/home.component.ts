import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // declare a dummy blog variable here

  public allBlogs = [
    {
      "blogId": "1",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublised": true,
      "view": 0,
      "bodyHtml": "This is a body blog",
      "description": "This is blog 1 description",
      "title": "This is blog 1"
    },
    {
      "blogId": "2",
      "lastModified": "2017-10-21T21:47:51.678Z",
      "created": "2017-10-21T21:47:51.678Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublised": true,
      "view": 0,
      "bodyHtml": "<h1> This is big text </h1>  <p> small text </p>",
      "description": "This is the description of the example blog and this is edited",
      "title": "This is an example blog"
    },
    {
      "blogId": "3",
      "lastModified": "2017-11-14T14:15:54.407Z",
      "created": "2017-11-14T14:15:54.407Z",
      "tags": [],
      "author": "Admin",
      "category": "comedy",
      "isPublised": true,
      "view": 0,
      "bodyHtml": "This is a body blog. This is the blog body.This is the body blog",
      "description": "This is third blog description",
      "title": "This is third blog"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
