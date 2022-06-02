import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  @Output() uploaded = new EventEmitter<string>();
  baseUrl: string = environment.api;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  upload(event: Event) {
    const files = (event.target as HTMLInputElement).files?.item(0);

    const data = new FormData();
    data.append('image', files!);


    this.http.post(`${this.baseUrl}/upload`, data)
      .subscribe((res: any) => {
        this.uploaded.emit(res.url);
      });
  }


}
