export class RequestResponse {
  id: string;
  name: string;
  email: string;
  message: string;
  subject: string;
  applicationType?: string;
  profileUrl?: string;
  maxRank?: string;
  gender?: string;
  birthday?: string;
  countryOrigin?: string;
  appliedRole?: string;
  appliedGame?: string;
  description?: string;
  isConsent?: string;
  timeCreated?: Date;

  constructor(id: string, name: string, email: string, message: string, subject: string, applicationType: string, profileUrl: string, maxRank: string, gender: string, birthday: string, countryOrigin: string, appliedRole: string, appliedGame: string, description: string, isConsent: string, timeCreated: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.message = message;
    this.subject = subject;
    this.applicationType = applicationType;
    this.profileUrl = profileUrl;
    this.maxRank = maxRank;
    this.gender = gender;
    this.birthday = birthday;
    this.countryOrigin = countryOrigin;
    this.appliedRole = appliedRole;
    this.appliedGame = appliedGame;
    this.description = description;
    this.isConsent = isConsent;
    this.timeCreated = timeCreated;
  }
}
