import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
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
