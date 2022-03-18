import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})
export class MailPage implements OnInit {

	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.http.get<any[]>("./assets/data.json").subscribe(res => {
			console.log(res)
		});
	}

}
