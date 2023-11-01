import {Injectable} from '@angular/core';
import {Translation} from "../../models/translation/translation";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  translationsNavbar: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'Teams'},
    '2': {id: '2', language: 'en', content: 'News'},
    '3': {id: '3', language: 'en', content: 'Schedule'},
    '4': {id: '4', language: 'en', content: 'Contact'},
    '5': {id: '5', language: 'en', content: 'About'},
    '6': {id: '6', language: 'en', content: 'Login'},
    '7': {id: '7', language: 'en', content: 'View Profile'},
    '8': {id: '8', language: 'en', content: 'Logout'},
  };

  translationsHomepage: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'We are Verzik'},
    '2': {id: '2', language: 'en', content: 'Latest News'},
    '3': {id: '3', language: 'en', content: 'Show All'},
    '4': {id: '4', language: 'en', content: 'Schedule and Stream'},
    '5': {id: '5', language: 'en', content: 'Upcoming'},
    '6': {id: '6', language: 'en', content: 'Results'},
    '7': {id: '7', language: 'en', content: 'See more'},
  };

  translationsFooter: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'Teams'},
    '2': {id: '2', language: 'en', content: 'News'},
    '3': {id: '3', language: 'en', content: 'Schedule'},
    '4': {id: '4', language: 'en', content: 'Contact'},
    '5': {id: '5', language: 'en', content: 'About'},
    '6': {id: '6', language: 'en', content: 'Partners'},
    '7': {id: '7', language: 'en', content: 'Privacy Policy'},
    '8': {id: '8', language: 'en', content: 'Terms of Use'},
    '9': {id: '9', language: 'en', content: 'Join us'},
  };

  translationsTeams: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'Meet the team'},
    '2': {
      id: '2',
      language: 'en',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
  };

  translationsNews: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'Latest News'},
    '2': {id: '2', language: 'en', content: 'Come and support us!'},
  };

  translationsSchedule: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'Schedule and Results'},
    '2': {id: '2', language: 'en', content: 'What happened? What\'s next?'},
    '3': {id: '3', language: 'en', content: 'Upcoming'},
    '4': {id: '4', language: 'en', content: 'Results'},
    '5': {id: '5', language: 'en', content: 'Switch between past and future matches'},
  };

  translationsContact: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'Contact Details'},
    '2': {id: '2', language: 'en', content: '22-2 Antrim Rd, Belsize Park, London, UK '},
    '3': {id: '3', language: 'en', content: 'verzik@gmail.com '},
    '4': {id: '4', language: 'en', content: '+44 20 3911 5640'},
    '5': {id: '5', language: 'en', content: 'Where to find us?'},
    '6': {id: '6', language: 'en', content: 'Request'},
    '7': {id: '7', language: 'en', content: 'First Name'},
    '8': {id: '8', language: 'en', content: 'Last Name'},
    '9': {id: '9', language: 'en', content: 'What can we help you with?'},
    '10': {id: '10', language: 'en', content: 'First Name is required.'},
    '11': {id: '11', language: 'en', content: 'Needs to be at least 3 characters long.'},
    '12': {id: '12', language: 'en', content: 'Needs to be less than 50 characters long.'},
    '13': {id: '13', language: 'en', content: 'The first letter must be uppercase.'},
    '14': {id: '14', language: 'en', content: 'Last Name is required.'},
    '15': {id: '15', language: 'en', content: 'Email'},
    '16': {id: '16', language: 'en', content: 'Email is required.'},
    '17': {id: '17', language: 'en', content: 'Please enter a valid email address.'},
    '18': {id: '18', language: 'en', content: 'Needs to be less than 100 characters long.'},
    '19': {id: '19', language: 'en', content: 'Topic'},
    '20': {id: '20', language: 'en', content: 'Topic is required.'},
    '21': {id: '21', language: 'en', content: 'Comments/Questions'},
    '22': {id: '22', language: 'en', content: 'This field is required.'},
    '23': {id: '23', language: 'en', content: 'Applied Game'},
    '24': {id: '24', language: 'en', content: 'Choose a game'},
    '25': {id: '25', language: 'en', content: 'Game is required.'},
    '26': {id: '26', language: 'en', content: 'Application Type'},
    '27': {id: '27', language: 'en', content: 'Choose an application type'},
    '28': {id: '28', language: 'en', content: 'Application Type is required.'},
    '29': {id: '29', language: 'en', content: 'Profile Url'},
    '30': {id: '30', language: 'en', content: 'Profile URL is required.'},
    '31': {id: '31', language: 'en', content: 'Not a valid URL.'},
    '32': {id: '32', language: 'en', content: 'Role'},
    '33': {id: '33', language: 'en', content: 'Choose a role'},
    '34': {id: '34', language: 'en', content: 'Role is required.'},
    '35': {id: '35', language: 'en', content: 'Max rank'},
    '36': {id: '36', language: 'en', content: 'Choose a rank'},
    '37': {id: '37', language: 'en', content: 'Max Rank is required.'},
    '38': {id: '38', language: 'en', content: 'Gender'},
    '39': {id: '39', language: 'en', content: 'Choose a gender'},
    '40': {id: '40', language: 'en', content: 'Gender is required.'},
    '41': {id: '41', language: 'en', content: 'Birthday'},
    '42': {id: '42', language: 'en', content: 'Birthday is required.'},
    '43': {id: '43', language: 'en', content: 'You must be at least 16 years old to apply.'},
    '44': {id: '44', language: 'en', content: 'Country'},
    '45': {id: '45', language: 'en', content: 'Choose a country'},
    '46': {id: '46', language: 'en', content: 'Country is required.'},
    '47': {id: '47', language: 'en', content: 'Why you?'},
    '48': {
      id: '48',
      language: 'en',
      content: '&bull; What are your strengths?&#10;&bull; What makes you different from others in your position?&#10;&bull; How do you play your role in this position?&#10;&bull; What are your best agents/champions/etc if you are a player?'
    },
    '49': {id: '49', language: 'en', content: 'Data processing consent'},
    '50': {id: '50', language: 'en', content: 'Consent is required.'},
    '51': {
      id: '51',
      language: 'en',
      content: 'By using this form you agree with the storage and handling of your data by this website according to our'
    },
    '52': {id: '52', language: 'en', content: 'Privacy policy'},
    '53': {id: '53', language: 'en', content: 'Submit'},
  };

  translationsAbout: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'Who are we?'},
    '2': {id: '2', language: 'en', content: 'One of UK\'s Top E-Sports Organizations'},
    '3': {
      id: '3',
      language: 'en',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et vehicula ex. Etiam non semper est, a ultrices diam. Ut diam mi, mattis semper lacus at, luctus posuere libero. Duis sed viverra urna. Integer egestas arcu at pharetra vulputate. Sed efficitur imperdiet eros nec rhoncus. Nulla laoreet, velit sed vulputate auctor, ligula arcu egestas nibh, et eleifend mauris tellus vitae purus. Nulla eget urna at nibh volutpat eleifend id id tellus. Aenean eu fringilla dolor. Pellentesque auctor euismod lectus. Donec euismod elit ex, sit amet fringilla neque facilisis nec. Nunc quis semper arcu. Integer accumsan ornare venenatis. Proin eu mollis purus, ut viverra nulla. Donec nec pulvinar dolor.\n' +
        '\n' +
        'Quisque vitae nulla id ipsum scelerisque interdum non vitae est. Fusce ac sem nec ipsum tempus viverra non sed tortor. Quisque tincidunt mauris a massa commodo gravida. Vestibulum et libero ac eros finibus condimentum ac a ipsum. Etiam ultricies ipsum ut diam hendrerit tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris at ex ante. '
    },
    '4': {id: '4', language: 'en', content: 'Special Thanks to Our'},
    '5': {id: '5', language: 'en', content: 'Partners'},
    '6': {
      id: '6',
      language: 'en',
      content: 'Our goal is to work closely and collaboratively with partners to improve the esports entertainment experience for all.'
    },
    '7': {id: '7', language: 'en', content: 'Got you interested?'},
    '8': {id: '8', language: 'en', content: 'Apply for a position through the contact page:'},
    '9': {id: '9', language: 'en', content: 'Apply'},
  };


  constructor() {
  }
}
