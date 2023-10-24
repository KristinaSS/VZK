export class Request {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  comments: string;
  topic: string;
  applicationId?: string;
  profileURL?: string;
  maxRank?: string;
  gender?: string;
  birthday?: string;
  countryOrigin?: string;
  appliedRole?: string;
  appliedGame?: string;
  reason?: string;
  consent?: string;


  constructor(id: string, firstName: string, lastName: string, email: string, comments: string, topic: string, applicationId: string, profileURL: string, maxRank: string, gender: string, birthday: string, countryOrigin: string, appliedRole: string, appliedGame: string, reason: string, consent: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.comments = comments;
    this.topic = topic;
    this.applicationId = applicationId;
    this.profileURL = profileURL;
    this.maxRank = maxRank;
    this.gender = gender;
    this.birthday = birthday;
    this.countryOrigin = countryOrigin;
    this.appliedRole = appliedRole;
    this.appliedGame = appliedGame;
    this.reason = reason;
    this.consent = consent;
  }
}
