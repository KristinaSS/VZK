import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication-service/authentication.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-verify-page',
    templateUrl: './verify-page.component.html',
    styleUrls: ['./verify-page.component.css']
})
export class VerifyPageComponent implements OnInit {
    verificationStatus!: String | undefined;
    message!: string;
    token!: string | null;
    email!: string | null;

    constructor(private authenticationService: AuthenticationService, private route: ActivatedRoute) {
    }

    async ngOnInit() {
        this.token = this.route.snapshot.paramMap.get('vToken');
        this.email = this.route.snapshot.paramMap.get('email');
        console.log(this.token);
        try {
            let response = await (await this.authenticationService.verifyToken(this.token, this.email)).toPromise();
            this.verificationStatus = response?.status;
            this.handleVerificationResponse();
        } catch (error) {
            // Handle errors here
            console.error('Error verifying account:', error);
            this.verificationStatus = 'error';
            this.handleVerificationResponse();
        }
    }

    handleVerificationResponse() {
        switch (this.verificationStatus) {
            case 'verified':
                this.message = '<p>Account has been verified</p>';
                break;
            case 'expired':
                this.message = '<p>Verification has expired</p>';
                break;
            case 'error':
                this.message = '<p>Problem has occurred while verifying</p>';
                break;
            default:
                this.message = '<p>Unknown verification status: ' + this.verificationStatus + '</p>';
                break;
        }
    }
}
