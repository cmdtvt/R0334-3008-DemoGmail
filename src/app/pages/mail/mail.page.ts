import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})
export class MailPage implements OnInit {
	emails = [];

	constructor(private http: HttpClient, private router: Router) { }

	ngOnInit() {
		this.http.get<any[]>("./assets/data.json").subscribe(res => {
			this.emails = res.map(email => {
				email.color = this.intToRGB(this.hashCode(email.from));
				return email;
			});
			console.log(this.emails);
		});
	}

	private hashCode(str) {
		var hash = 0;
		for (var i = 0; i < str.length; i++) {
			hash = str.charCodeAt(i) + ((hash << 5) - hash);
		}
		return hash;
	}

	private intToRGB(i) {
		var c = (i & 0x00FFFFFF)
		.toString(16)
		.toUpperCase();

		return '#' + '00000'.substring(0, 6 - c.length) + c;
	}

	openDetails(id) {
		this.router.navigate(['tabs', 'mail', id])
	}

	openAccount(ev) {
		
	}

	doRefresh(ev) {
		setTimeout( () => {
			ev.target.complete();
		}, 2000);
	}

}
