import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {RequestResponse} from "../../models/request/requestResponse";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {
  }

  createContactRequest(isConsent: any, name: any, email: any, subject: any, message: any) {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';
    return this.http.post<RequestResponse>('/server/request/contact/create',
      {isConsent, name, email, subject, message},
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      });
  }

  createApplicationRequest(
    contactRequestId: any,
    isConsent: any,
    appliedName: any,
    appliedEmail: any,
    subject: any,
    appliedGame: any,
    applicationType: any,
    profileUrl: any,
    appliedRole: any,
    maxRank: any,
    gender: any,
    birthday: any,
    countryOrigin: any,
    description: any
  ) {
    let token = sessionStorage.getItem("token");
    token = token || 'anonymous';
    return this.http.post<RequestResponse>('/server/request/application/create',
      {
        contactRequestId,
        isConsent,
        appliedName,
        appliedEmail,
        subject,
        appliedGame,
        applicationType,
        profileUrl,
        appliedRole,
        maxRank,
        gender,
        birthday,
        countryOrigin,
        description
      },
      {
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + token
        })
      });
  }

  // @ts-ignore
  async submitForm(formType: string, contactForm: FormGroup): Promise<boolean> {
    try {
      const consent = contactForm.get('consent')?.value;
      const name = contactForm.get('fName')?.value + ' ' + contactForm.get('lName')?.value;
      const email = contactForm.get('email')?.value;
      const topic = contactForm.get('topic')?.value;
      const comments = contactForm.get('comments')?.value;

      const data = await this.createContactRequest(consent, name, email, topic, comments).toPromise();


      if (formType === 'contact') {
        return true;
      } else if (formType === 'application' || formType === 'player') {

        const contactRequestId = data?.id;
        const isConsent = consent;
        const appliedName = name;
        const appliedEmail = email;
        const subject = topic;
        const appliedGame = contactForm.get('game')?.value;
        const applicationType = contactForm.get('applicationType')?.value;
        const profileUrl = contactForm.get('profileURL')?.value;
        const appliedRole = contactForm.get('role')?.value;
        const maxRank = contactForm.get('maxRank')?.value;
        const gender = contactForm.get('gender')?.value;
        const birthday = contactForm.get('birthday')?.value;
        const countryOrigin = contactForm.get('country')?.value;
        const description = contactForm.get('description')?.value;

        await this.createApplicationRequest(
          contactRequestId,
          isConsent,
          appliedName,
          appliedEmail,
          subject,
          appliedGame,
          applicationType,
          profileUrl,
          appliedRole,
          maxRank,
          gender,
          birthday,
          countryOrigin,
          description
        ).toPromise();

        return true;
      }
    } catch (error) {
      console.error(`Error submitting ${formType} request:`, error);
      return false;
    }
  }

}
