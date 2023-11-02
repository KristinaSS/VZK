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
    '8': {id: '8', language: 'en', content: 'Come and support us!'},
    '9': {id: '9', language: 'en', content: 'No news articles available.'},
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
    '10': {id: '10', language: 'en', content: 'Information'},
  };

  translationsTeams: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'Meet the gang'},
    '2': {
      id: '2',
      language: 'en',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    '3': {id: '3', language: 'en', content: 'Click to scroll to teams'},
  };

  translationsNews: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'Latest News'},
    '2': {id: '2', language: 'en', content: 'Come and support us!'},
    '3': {id: '3', language: 'en', content: 'No news articles available.'},
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
    '54': {id: '54', language: 'en', content: 'Contact us'},
    '55': {id: '55', language: 'en', content: 'Other'},
    '56': {id: '56', language: 'en', content: 'General Inquiry'},
    '57': {id: '57', language: 'en', content: 'Application Request'},
    '58': {id: '58', language: 'en', content: 'Partnership'},
    '59': {id: '59', language: 'en', content: 'Choose a topic'},
    '60': {id: '60', language: 'en', content: 'Male'},
    '61': {id: '61', language: 'en', content: 'Female'},
  };

  translationsAbout: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'Who are we?'},
    '2': {id: '2', language: 'en', content: 'One of UK\'s Top E-Sports Organizations'},
    '3': {
      id: '3',
      language: 'en',
      content: '        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et vehicula ex. Etiam non semper est, a ultrices\n' +
        '          diam. Ut diam mi, mattis semper lacus at, luctus posuere libero. Duis sed viverra urna. Integer egestas arcu\n' +
        '          at pharetra vulputate. Sed efficitur imperdiet eros nec rhoncus. Nulla laoreet, velit sed vulputate auctor,\n' +
        '          ligula arcu egestas nibh, et eleifend mauris tellus vitae purus. Nulla eget urna at nibh volutpat eleifend\n' +
        '          id id tellus. Aenean eu fringilla dolor. Pellentesque auctor euismod lectus. Donec euismod elit ex, sit amet\n' +
        '          fringilla neque facilisis nec. Nunc quis semper arcu. Integer accumsan ornare venenatis. Proin eu mollis\n' +
        '          purus, ut viverra nulla. Donec nec pulvinar dolor.\n' +
        '        </p>\n' +
        '        <p>\n' +
        '        Quisque vitae nulla id ipsum scelerisque interdum non vitae est. Fusce ac sem nec ipsum tempus viverra non sed\n' +
        '          tortor. Quisque tincidunt mauris a massa commodo gravida. Vestibulum et libero ac eros finibus condimentum ac\n' +
        '          a ipsum. Etiam ultricies ipsum ut diam hendrerit tincidunt. Orci varius natoque penatibus et magnis dis\n' +
        '          parturient montes, nascetur ridiculus mus. Mauris at ex ante.\n' +
        '        </p>'
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
    '10': {id: '10', language: 'en', content: 'Our mission'},
    '11': {id: '11', language: 'en', content: 'To become the top UK E-Sports organization'},
  };

  translationsPrivacyPolicy: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'Privacy Policy'},
    '2': {
      id: '2',
      language: 'en',
      content: '\n' +
        '<h2>I. Controller, Scope</h2>\n' +
        'G2esports is a service provided by G ESPORTS HOLDING GMBH (hereinafter also referred to as “Provider”), acting as Controller in accordance with relevant data protection provisions. Please find full company and contact details on the website. The protection of personal data has the highest priority for us. We would therefore like to inform you about which data we collect when, and how we process your personal data. This privacy notice describes the collection and processing of personal data on the website <a href="https://www.g2esports.com">www.g2esports.com</a>&nbsp; (hereinafter referred to as "Website" or “Platform”). <strong>Please note that some of the data processing activities may be performed in joint controllership with one or more vendors on our marketplace, as described in the relevant section further down. In such cases, please refer to the relevant vendor profile available on the marketplace to learn about the joint controller’s details. </strong> <strong>Data Protection Officer</strong> We have appointed a Data Protection Officer, that you can always reach out at: <a href="mailto:dpo@g2esports.com">dpo@g2esports.com</a>.\n' +
        '<h2>II. General information about data processing</h2>\n' +
        '<h3>1. Purposes of processing</h3>\n' +
        'In principle, we only process personal data of Users if this is necessary to provide a functional Platform, our contents and services and to close or perform contracts with Users.\n' +
        '<h3>2. Legal basis for the processing of personal data</h3>\n' +
        'Most often we process personal data according to on one of the following legal bases:\n' +
        '<h4>consent</h4>\n' +
        'Whenever we collect the data subject’s consent to the processing of personal data, Art. 6 para. 1 a EU General Data Protection Regulation (GDPR) serves as the legal basis.\n' +
        '<h4>legal obligation</h4>\n' +
        'If the processing of personal data is necessary for compliance with a legal obligation which the Controller is subject to, Art. 6 para. 1 c GDPR serves as the legal basis.\n' +
        '<h4>contract or pre-contractual measures</h4>\n' +
        'If the processing of personal data is necessary for the performance of a contract to which the data subject is party, Art. 6 para. 1 b GDPR serves as the legal basis. This also applies to processing operations that are necessary to carry out pre-contractual measures.\n' +
        '<h4>legitimate interests</h4>\n' +
        'If processing is necessary for the purposes of the legitimate interests pursued by the Controller or a third party and if such interests are not overridden by the interests, fundamental rights and freedoms of the data subject, Art. 6 para. 1 f GDPR serves as the legal basis. <strong>Unless otherwise specified within this privacy notice, the processing of your personal data is necessary for the performance of a contract with you or in the framework of pre-contractual measures, which take place at your request, and the legal basis for processing is therefore art. 6 para. 1 b GDPR.</strong>\n' +
        '<h3>3. Data erasure and retention time</h3>\n' +
        'In principle and unless otherwise stated, your personal data will only be stored until the purpose of the collection and storage is achieved. If the storage is based on your consent, personal data can be stored as long as you do not revoke such consent. Furthermore, data may be stored if it is required by European or national legal provisions, laws or regulations which we are subject to. Personal data will be blocked or deleted if the retention period set forth by the any such regulations expires, unless further storage is necessary for the conclusion or fulfilment of a contract.\n' +
        '<h3>4. Transfer to third countries</h3>\n' +
        'Unless otherwise stated, all data processing operations take place within the EU or the EEA countries. Data processing operations carried out by third-party providers established outside the mentioned geographical area may be carried out in part or in full in the countries the respective providers are based in, in accordance with the relevant and applicable data protection regulations. A transfer of personal data outside the EU or the EEA shall only take place on the basis of on an adequacy decision of the European Commission, including the adequacy decision regarding the EU-US Privacy Shield, or subject to appropriate safeguards, such as standard data protection clauses adopted by the European Commission. A list of current adequacy decisions is available on the European Commission\'s website. Further information about the EU-US Privacy Shield and a list of participating data recipients can be found on the website of the US Department of Commerce.\n' +
        '<h2>III. Processing of personal data in general</h2>\n' +
        'Regardless of whether you take advantage of any of the Website’s features – such as the creation of User accounts – we automatically collect data about your use of the Website. This includes in particular the accessed URL, access date and time, transferred data volume, http status code of the access reply, web browser type and operating system, HTTP referrer, as well as IP address. This information is not associated with your person. We collect and process such data to ensure Website operation and availability. In addition, it is used to analyse, store and evaluate information about User behaviour in an anonymous form and to continuously improve and further develop our service. We only store your IP address in the log files for a limited period of time, if this is necessary for security purposes. These purposes constitute our legitimate interest, which justifies data processing pursuant to art. 6 par. 1 lit. f) GDPR.\n' +
        '<h2>IV. Data processing when creating a User account</h2>\n' +
        'When creating a User account, we store the following data: first and last name, password, e-mail address, age. Your User account will be populated with such data, allowing you to set preferences and keep track of your activity. We need to collect an indication about your age to make sure that you comply with our minimum age requirements, or with specific age requirements applicable to selected features. The following additional personal data will be collected once the User account has been created in order to access to certain features of the Website (e.g. to place orders on the marketplace): invoicing data (first and last name, if different from user data), invoicing address, delivery address. Also, once an account has been created, all information or data generated and collected via that account, such as login history, site visits or page views will be linked with you. The provision of all above-mentioned data is required as a precontractual measure of a contract we will be closing with you (e.g. about a membership plan) or in order to perform a contract we have already closed with you and to provide you the relevant service. Failure to provide them so will result in unavailability of our services. Further data and information, such as your personal interests in terms of games, players, teams etc., may be provided on a voluntary basis.\n' +
        '<h4>Registering via a social network</h4>\n' +
        'On our Website you may have the option to create a user account and subsequently log into it using a preexisting social media account, as displayed on our Website. If you choose this option, we will pull the following data from your social media profile to populate your user account: username. Based on your consent, we may also collect the total amount of followers on your social media profile. We use this information to scout for users that could potentially act as influencers for us. Furthermore, you have the option to link any of your accounts on supported social media with your user account on our website. In these cases, the processing of personal data is based on art. 6 par. 1 a) GDPR.\n' +
        '<h4>Creating a vendor account</h4>\n' +
        'In addition to what specified above, whenever you register an account as a vendor on our marketplace, we will collect the following data: name &amp; last name, trade name, e-mail, FAX number, payment data, address, invoicing address, VAT number or other tax identification number.\n' +
        '<h2>V. Processing of personal data when placing an order</h2>\n' +
        'When you place an order via our Website, personal data related to it will be collected to process that order.\n' +
        '<h3>1. Memberships</h3>\n' +
        'If you close a contract over a membership plan, we will process the data you have stored in your user account to perform the contract and – if applicable – to process payments.\n' +
        '<h3>2. Purchases on the marketplace</h3>\n' +
        'If you purchase goods or services on our marketplace, we will process the data you have stored in your user account to perform the contract and – if applicable – to process payments, and will disclose such data to the respective vendor that you’ve entered into a contract with. In case you place the order without registering or logging into a user account (“as guest”) we’ll collect and disclose to the respective vendor the following data: invoicing data (first and last name, if different from user data), invoicing address, delivery address.\n' +
        '<h2>VI. Personal data you freely upload</h2>\n' +
        '<h3>Personal data processed when contacting us</h3>\n' +
        'If you submit a support request to us via the Platform, we will only collect such data and information that you will provide when describing the reason for your request. The provision of personal data is not required to this end. Should any personal data be provided, it will only be used to process your request and reply to it. If you contact us via the contact form available on our website, you will be required to provide the following personal data: name, e-mail address. This information will only be used to process your inquiry and reply to it.\n' +
        '<h3>Personal data processed publishing content on the Platform</h3>\n' +
        'If you publish comments, content or any other chat messages to our Platform, any personal data contained therein shall be made available and disclosed to such audience as displayed on the Platform. Unless otherwise specified, content comments shall be made public for everyone accessing the Platform, while chat messages content shall be disclosed only to chat participants.\n' +
        '<h3>Personal data processed in connection with surveys, polls and quizzes</h3>\n' +
        'Whenever you participate in polls, surveys or quizzes as performed from time to time via our Website, we’ll collect various personal data referring to you on an entirely voluntary basis. We will inform you in connection with each specific circumstance, what personal data are affected and for which purposes they are being collected. Unless otherwise specified, the processing of personal data described in this section takes place within the framework or in preparation of a contract with us, according to art. 6 par. 1b GDPR. From time to time we may, however, request your consent to perform processing activities not directly linked to a contract with us. In such cases we will ask for your consent according to art. 6 par. 1a GDPR.\n' +
        '<h2>VII. Data Processors</h2>\n' +
        'In order to provide our services, we may cooperate with selected third-party providers who process data on our behalf (“Processors”). This may for instance be the case whenever we need to send e-mail notifications to Users for contractual purposes. Such e-mail could be managed and sent out via a third-party service. Similarly, in case the service is provided against a fee, payments shall be processed through one of the Processors we cooperate with. Payment data shall therefore be directly collected and processed by the selected payment service provider, that will then inform us about the payment status. We do not collect or store any personal data regarding payment methods. Furthermore, we cooperate with processors to handle logistics and fulfilment processes, as well as to operate and maintain our infrastructure. As far as legally required, we have entered into agreements pursuant to art. 28 GDPR with Processors, including payment service providers, processing your personal data on our behalf.\n' +
        '<h2>VIII. Joint controllership, Profiling</h2>\n' +
        'Whenever you use our marketplace to purchase goods or services from any of the offering vendors, we and the relevant vendor will act as joint controllers as of art. 4 (7) and 26 GDPR. This means that we and the relevant vendor jointly determine the purposes and means of the processing by way of a binding arrangement according to art. 26 GDPR. In particular, whenever you place an order, we will collect the necessary data and forward it to the relevant vendor, as described above in sec. V. 2. We will also process this data to analyze and evaluate your use of the marketplace and your interests for the goods and services offered, in order to create user profiles based on criteria such as age, geolocation, purchasing habits, gender, interactions with content on our Website, and thereby improve our service, enhance its functionalities and provide you with customized features or offers. We may share data stored in user profiles with third parties, including vendors, only in an aggregate and fully anonymized manner. The processing of personal data for the creation of user profiles is based on your consent as of art. 6 par. 1a) GDPR.\n' +
        '<h2>IX. Processing in compliance with a legal obligation</h2>\n' +
        'Please note that, in addition to what specified in this privacy notice, your data may be processed in compliance with legal obligations to which we or out joint controllers are subject to. For instance, we may be obliged to store your data for a legally determined period to comply with tax law provisions. Please contact us in case you want to learn further details about such processing activities. In such cases the legal basis of the processing is art. 6 par. 1c GDPR.\n' +
        '<h2>X. Use of Trackers</h2>\n' +
        '<h3>1. Description and scope of data processing</h3>\n' +
        'In order to improve User experience of our Website and to enable selected functions, we implement cookies or other trackers (hereinafter jointly referred to as “Cookies”) on various pages. These are small data sets being stored on your device. Some of the Cookies we use expire after the end of the browser session, i.e. after closing your browser (so-called session Cookies). Other Cookies remain on your device and enable us or our partner companies to recognize your browser or device on your next visit (persistent Cookies). You can set your browser preferences in order to be notified about the setting of Cookies and decide individually about accepting or refusing them in certain cases or generally. You can also manually delete Cookies from your device at any time. Failure to accept Cookies may result in minor limitations in our service’s functionalities. Cookies are stored on the User\'s computer and from there transmitted to our site. Therefore, you as a User have full control over the use of Cookies. You can deactivate or restrict the transmission of Cookies by changing the settings in your Internet browser. Cookies that have already been saved can be deleted at any time. This can also be done automatically. If Cookies are deactivated for our Website, it may no longer be possible to use all functions of the Website in full. You can also manage your cookie preferences via recognized third-party services such as <a href="https://www.youronlinechoices.eu/">https://www.youronlinechoices.eu/</a> (if you’re based in the EU).\n' +
        '<h3>2. Strictly necessary Cookies</h3>\n' +
        'Some of the Cookies we use are strictly necessary to allow us to deliver the service you requested or to operate our Website and Platform. Some elements of our Website require that your browser be identified after page changes. Such technical Cookies may collect personal information about you, such IP address, log-in information, etc. The strictly necessary Cookies we implement have a lifetime that ranges between the duration of a browsing session (“session Cookies”) and 12 months. The processing of personal data through strictly necessary cookies is art. 6 par. 1f GDPR. In case such cookies are necessary as a pre-contractual measure or for performing a contract with you, the legal basis is art. 6 par. 1b GDPR.\n' +
        '<h3>3. Other Cookies</h3>\n' +
        'In addition, we use third-party Cookies to monitor and evaluate User behavior for statistics and market analysis purposes. Such Cookies are provided by third parties and implemented in our Website. Please refer to the following sections for details. Such Cookies allow us to analyse your use of the Website and improve it continuously. Analytics allow us to offer you a better service that meets your interests better. Unless otherwise specified, the legal basis of processing through other Cookies mentioned below is your consent pursuant to art. 6 par. 1a GDPR. Unless otherwise specified, the lifetime of Cookies used based on your consent ends upon withdrawal of your consent.\n' +
        '<h4>GOOGLE ANALYTICS</h4>\n' +
        'We implement "Google Analytics". Google Analytics is a web analysis service provided by Google Inc. The information generated by the Google Analytics Cookie about your use of our Website is generally transmitted to and stored by Google on servers in the United States. IP anonymization has been activated on our Website: this means that the IP address of Users based within the European Union or the European Economic Area are abridged, and therefore anonymized, before being transferred abroad. Only in exceptional cases is the unabridged IP address transferred to a Google servers in the USA and shortened there. On our behalf, Google will use this information to evaluate your use of the Website, to draft reports about Website activity and to provide us with other services relating to Website and Internet use. The IP address transmitted by your browser in the context of Google Analytics is not put in relation with other Google data. You may object to the use of Cookies by selecting the appropriate settings on your browser, however please note that doing so may result in limited functionality of this Website. You can also prevent Google from collecting the data generated by the Cookie and relating to your use of the Website (including your IP address) and processing this data by installing the browser plug-in available at the following link: <a href="https://tools.google.com/dlpage/gaoptout?hl=en">https://tools.google.com/dlpage/gaoptout?hl=en</a>. To find out further information about how Google handles personal data, please refer to Google\'s privacy policy: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a>.\n' +
        '<h4>GOOGLE ADS</h4>\n' +
        'Google Ads is an advertising, analytics and conversion tracking service provided by Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. If you access our Website via a Google ad, Google Ads places a conversion cookie on your device. This cookie expires after 30 days. It doesn’t allow for your identification. If the cookie has not expired when you visit certain pages of our Website, we and Google may recognize that a User clicked on the ad and has been redirected to our Website. Each Google Ads customer is assigned a different cookie. As a result, cookies cannot be tracked across Google Ads customer Websites. The information collected by the conversion cookie is used to generate conversion statistics for Google Ads customers who have opted for conversion tracking. Google Ads customers will know the total number of Users who clicked on their ad and were directed to a page tagged with a conversion tracking tag. However, we will not receive any information that personally identifies Users. If you do not wish to participate in the tracking process, you can also opt out of the cookie-setting process required for this, for example via your browser setting, which generally disables automatic cookie-setting. You can also deactivate cookies for conversion tracking by setting your browser to block cookies from the "googleadservices.com" domain. For further information please refer to Google\'s privacy policy: <a href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a>.\n' +
        '<h4>FACEBOOK</h4>\n' +
        'On our Website we integrate the so-called "Facebook pixel", operated by Facebook Inc, 1 Hacker Way, Menlo Park, CA 94025, USA, or if you are resident in the EU, Facebook Ireland Ltd, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland, for purposes of analysis, optimization and economic operation of our online offer. Facebook is certified under the Privacy Shield Agreement and thereby offers a guarantee to comply with European data protection law (https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active). The Facebook pixel enables Facebook to create target groups for the display of advertisements based on our Website’s visitors. Accordingly, we use the Facebook Pixel in order to display the such ads placed by us only to those Facebook users who have also shown an interest in our online offer or who have certain characteristics (e.g. interests in certain topics or products determined on the basis of the websites visited) that we transmit to Facebook (so-called "Custom Audiences"). With the help of the Facebook pixel, we also want to ensure that our Facebook Ads correspond to the potential interest of the users and do not appear annoying. With the help of the Facebook Pixel, we can also track the effectiveness of Facebook ads for statistical and market research purposes by seeing whether users are redirected to our website after clicking on a Facebook ad (so-called "conversion"). The processing of data by Facebook takes place within the framework of Facebook\'s data usage guidelines. Accordingly, general information on the display of Facebook ads is provided in the Facebook Data Usage Policy: https://www.facebook.com/policy. Specific information and details about the Facebook pixel and its functionality can be found in the Facebook help section: https://www.facebook.com/business/help/651294705016616. You may object to the collection by the Facebook Pixel and use of your information to display Facebook Ads. To control the types of ads that are displayed to you within Facebook, you can go to the Facebook-established page and follow the usage-based advertising settings instructions at https://www.facebook.com/settings?tab=ads. The settings are platform-independent, meaning that they are applied to all devices, such as desktop computers or mobile devices.\n' +
        '<h4>SALESFORCE</h4>\n' +
        'Our CRM system Salesforce (provided by Salesforce.com Germany GmbH, Erika-Mann-Str. 31, 80636 Munich, Germany) allows us to analyze and evaluate user behavior in order to target users with ads that are more relevant to them and consistent with their preferences and interests.&nbsp; To achieve this purpose, Salesforce places cookies on users’ devices via our Website in order to keep track of their choices, purchases and preferences. Based upon this information, we are able to create user profiles and improve our service. Salesforce is certified under the Privacy Shield Agreement and thus offers an additional guarantee to comply with European data protection law if data is processed in the USA (https://c1.sfdcstatic.com/content/dam/web/de_de/www/documents/legal/german-privacy-shield-notice.pdf). For more information, please see salesforce\'s privacy policy at <a href="https://www.salesforce.com/de/company/privacy/">https://www.salesforce.com/de/company/privacy/</a>. In addition to what specified above, you can withdraw your consent to Salesforce cookies following the instruction provided by Salesforce: <a href="https://www.salesforce.com/products/marketing-cloud/sfmc/audience-studio-consumer-choice/">https://www.salesforce.com/products/marketing-cloud/sfmc/audience-studio-consumer-choice/</a>. <br>\n' +
        '<h4>HOTJAR</h4>\n' +
        '<p>We use the web analytics service Hotjar provided by Hotjar Ltd. Hotjar Ltd. is a European company based in Malta (Hotjar Ltd, Level 2, St Julians Business Centre, 3, Elia Zammit Street, St Julians STJ 1000, Malta, Europe. This tool makes it possible to track movements on the websites on which Hotjar is used (so-called heat maps). For example, it is possible to see how far users scroll and which buttons users click on and how often. Furthermore, it is also possible with the help of the tool to obtain feedback directly from the users of the website. In this way, we obtain valuable information to make our websites even faster and more customer-friendly.</p>\n' +
        '<p>We pay particular attention to the protection of your personal data when using this tool. For example, we can only track which buttons are clicked, mouse history, how far scrolled, device screen size, device type and browser information, geographic location (country only) and preferred language to display our website. Areas of the websites where personally identifiable information about you or third parties is displayed are automatically hidden by Hotjar and are therefore not trackable at any time.</p>\n' +
        '<p>For more information about Hotjar Ltd. and about the Hotjar tool, please visit:</p>\n' +
        '<p><a href="https://www.hotjar.com/" target="_blank" rel="noopener noreferrer">https://www.hotjar.com</a></p>\n' +
        '<p>he privacy policy of Hotjar Ltd. can be found at:</p>\n' +
        '<p><a href="https://www.hotjar.com/privacy" target="_blank" rel="noopener noreferrer">https://www.hotjar.com/privacy</a></p>\n' +
        '<p>As a <strong><u>security measure</u></strong>, the data is not evaluated on the basis of your person, but only on a statistical basis.</p>\n' +
        '<p><strong><u>The purpose</u></strong> of using Hotjar is the anonymized analysis of your usage behavior on our websites. The knowledge gained from this helps to improve our offer. <strong><u>The legal basis</u></strong> is consent pursuant to Art. 6 (1) a GDPR , which we request when you visit the website. In addition, an order processing agreement has been concluded in accordance with the requirements of Art. 28 GDPR.</p>\n' +
        '<h4>YOUTUBE API</h4>\n' +
        '<div>\n' +
        '  <strong></strong>We would like to inform you that our G2 shop and our G2 App use the YouTube API services provided by Google. By using our website/app, you agree to the terms of use and privacy policy of Google and YouTube API Client (<a href="https://www.youtube.com/t/terms" rel="noopener noreferrer" style="box-sizing: inherit; text-decoration-line: none;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.youtube.com/t/terms&amp;source=gmail&amp;ust=1686065977609000&amp;usg=AOvVaw3_TiQBRIIruj08ZQ_E5GTV">https://www.youtube.com/t/<wbr>terms</a>), respectively.</div>\n' +
        '<div></div>\n' +
        '<div></div>\n' +
        '<div>Please note that when you access our website/app, certain information about your usage may be collected by the YouTube API services. This includes, but is not limited to, your IP address, browsing behavior, and your interaction with YouTube content.</div>\n' +
        '<div></div>\n' +
        '<div></div>\n' +
        '<div>We encourage you to review the Google and YouTube privacy policies (<a href="https://policies.google.com/privacy" rel="noopener noreferrer" style="box-sizing: inherit; text-decoration-line: none;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://policies.google.com/privacy&amp;source=gmail&amp;ust=1686065977609000&amp;usg=AOvVaw3Fxh5b0jg2Sle4-8YzS_Vd">https://policies.google.com/<wbr>privacy</a>;&nbsp;<a href="https://www.youtube.com/t/terms" rel="noopener noreferrer" style="box-sizing: inherit; text-decoration-line: none;" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.youtube.com/t/terms&amp;source=gmail&amp;ust=1686065977609000&amp;usg=AOvVaw3_TiQBRIIruj08ZQ_E5GTV">https://www.youtube.<wbr>com/t/terms</a>) for more information about how your information is collected, used, and protected.</div>\n' +
        '<div></div>\n' +
        '<p>&nbsp;</p>\n' +
        '<h2>XI. Promotional e-mail messages</h2>\n' +
        '<h3>a.</h3>\n' +
        'If we have collected your e-mail address in the context of the purchase of one of our services, we may send you promotional e-mail messages about our own products and service similar to those you’ve already purchased. <strong>You can object to receiving such promotional e-mail messages at any time at no cost by sending an e-mail to newsletter@g2esports.com. </strong>We will inform you about the right of objection when collecting the email address and within each e-mail sent. The legal basis of data processing is art. 13 par. 2 of dir. 2002/58/EC and the respective implementing provisions in German law (§ 7 par. 3 UWG).\n' +
        '<h3>b.</h3>\n' +
        'You can subscribe to our newsletter by entering your e-mail address in the respective form or by checking the respective check-box upon registration of your user account. You will then receive an automatic confirmation e-mail to the address you entered, which contains a link. The registration process is only completed once you confirm it by navigating to that link. We use your email address to send you promotional content and offers about our own services and those of partner companies. The data will not be passed on to third parties. You can withdraw your consent to receive newsletters at any time without stating reasons by following the instruction provided in each newsletter sent, or by sending us an unambiguous notice at <strong>newsletter</strong><strong>@g2esports.com</strong><strong>.</strong> We will inform you about the right to withdraw your consent upon subscription to the newsletter service and within each newsletter sent. Our newsletters contain a so-called "web-beacon", i.e. a pixel-sized file that is retrieved from our server when the newsletter is opened or, if we use our mailing service provider Salesforce.com (provided by Salesforce.com Germany GmbH, Erika-Mann-Str. 31, 80636 Munich, Germany), from their server. Within the scope of this retrieval, technical information such as information on the browser and your system, as well as your IP address and time of retrieval are initially collected. This information is used for the technical improvement of the services based on the technical data or the target groups and their reading behavior based on their retrieval locations (which can be determined by means of the IP address) or the access times. Statistical surveys also include determining whether newsletters are opened, when they are opened and which links are being clicked. For technical reasons, this information can be assigned to individual newsletter recipients. However, it is neither our nor Salesforce’s intention to track individual users. Twe use this feature to learn more about the reading habits of our users and to adapt our content to their preferences or to adapt the content of our newsletters to the interests of our users. The legal basis for processing your personal data is art. 6 par. 1a) GDPR.\n' +
        '<h3>c.</h3>\n' +
        'We also work together with our partners, who offer you different promotions, such as promotion codes for their platforms. When we integrate the partner program on our pages, we ask for your explicit consent to use your e-mail address and inform you about the respective partner in the relevant parts of the Website. The data we collect will then be forwarded to the partner for the purpose of the respective service. The legal basis for this is your consent according to Art. 6 para. 1 a GDPR and can be revoked at any time.\n' +
        '<h2>XII. Social Media plugins</h2>\n' +
        'We implement social media plugins of various providers in order to improve our service and make it more attractive for you and to allow for the sharing of content. This is our legitimate interest justifying the processing of personal data according to art. 6 par. 1f GDPR. In order to increase the protection of your data when you use our Website, such plugins are not fully integrated. This way we ensure that no connection to the servers of the respective social network’s provider is established, unless you decide to activate the plugin. If you click on one of the plugin buttons, a new window will appear and load the respective social network provider’s page, on which you may (after entering your login data, if required) e.g. press the Like or Share button. Please find further details about the purpose and scope of the data collection and the further processing and use of the data by the respective social network providers as well as contact details and your rights and setting options for the protection of your personal data in the respective privacy statements:\n' +
        '<ul>\n' +
        '  <li>\n' +
        '    <strong>Twitter:</strong> Twitter, Inc., 1355 Market St, Suite 900, San Francisco, California 94103, USA; <a href="https://twitter.com/privacy">https://twitter.com/privacy</a>.</li>\n' +
        '  <li>\n' +
        '    <strong>Facebook:</strong> Facebook Inc, 1 Hacker Way, Menlo Park, CA 94025, USA, or if you are resident in the EU, Facebook Ireland Ltd, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland; <a href="https://www.facebook.com/policy.php">https://www.facebook.com/policy.php</a>.</li>\n' +
        '  <li>\n' +
        '    <strong>Reddit:</strong> Reddit, Inc., 548 Market St. #16093, San Francisco, California 94104, or, if you’re based in the EU, Reddit Ireland Limited, c/o Matheson, Attn: Reddit EU Data Inquiries, 70 Sir John Rogerson\'s Quay, Dublin 2, Ireland; <a href="https://www.redditinc.com/policies/privacy-policy">https://www.redditinc.com/policies/privacy-policy</a>.</li>\n' +
        '  <li>Pinterest: Pinterest Europe Ltd., Palmerston House, 2nd Floor, Fenian Street, Dublin 2, Ireland; <a href="https://policy.pinterest.com/en/privacy-policy">https://policy.pinterest.com/en/privacy-policy</a>.</li>\n' +
        '  <li>\n' +
        '    <strong>Weibo</strong>: <a href="https://www.weibo.com/overseas">https://www.weibo.com/overseas</a>\n' +
        '  </li>\n' +
        '  <li>\n' +
        '    <strong>Whatsapp</strong>: WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland; <a href="https://www.whatsapp.com/legal/#privacy-policy">https://www.whatsapp.com/legal/#privacy-policy</a>.</li>\n' +
        '  <li>\n' +
        '    <strong>Telegram</strong>: Telegram Inc., Craigmuir Chambers, Road Town, Tortola D8, British Virgin Islands, 1110; EU representative: Telegram UK Holdings Ltd, 71-75 Shelton Street, Covent Garden, London, England, WC2H 9JQ; <a href="https://telegram.org/privacy">https://telegram.org/privacy</a>.</li>\n' +
        '  <li>\n' +
        '    <strong>Instagram: </strong>Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Ireland, <a href="https://help.instagram.com/519522125107875">https://help.instagram.com/519522125107875</a>.</li>\n' +
        '  <li>\n' +
        '    <strong>Twitch: </strong>Twitch Interactive, Inc. mit Sitz in 350 Bush Street, 2nd Floor, San Francisco, CA 94104, <a href="https://www.twitch.tv/p/legal/privacy-notice/">https://www.twitch.tv/p/legal/privacy-notice/</a>.</li>\n' +
        '  <li>\n' +
        '    <strong>YouTube: </strong>Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland, <a href="https://policies.google.com/?hl=en&amp;gl=en">https://policies.google.com/?hl=en&amp;gl=en</a>.</li>\n' +
        '  <li>\n' +
        '    <strong>Discord: </strong>Discord, Inc., 444 De Haro St, Suite 200, San Francisco, California 94107,&nbsp; <a href="https://discordapp.com/privacy">https://discordapp.com/privacy</a>\n' +
        '  </li>\n' +
        '</ul>\n' +
        '<h2>XIII. Data Subjects’ rights</h2>\n' +
        'As a data subject, you have the following rights pursuant to the GDPR:\n' +
        '<ul>\n' +
        '  <li>\n' +
        '    <strong>Your right of access</strong> - You have the right to ask us for copies of your personal information.</li>\n' +
        '  <li>\n' +
        '    <strong>Your right to rectification</strong> - You have the right to ask us to rectify information you think is inaccurate. You also have the right to ask us to complete information you think is incomplete.</li>\n' +
        '  <li>\n' +
        '    <strong>Your right to erasure</strong> - You have the right to ask us to erase your personal information in certain circumstances.</li>\n' +
        '  <li>\n' +
        '    <strong>Your right to restriction of processing</strong> - You have the right to ask us to restrict the processing of your information in certain circumstances.</li>\n' +
        '  <li>\n' +
        '    <strong>Your right to notification </strong>- If you have exercised your right to have the Controller rectify, erase or limit the processing, the Controller shall communicate any rectification or erasure of personal data or restriction of processing to each recipient to whom the personal data concerning you have been disclosed, unless this proves impossible or involves disproportionate effort. You have the right to be informed about those recipients.</li>\n' +
        '  <li>\n' +
        '    <strong>Your right to object to processing</strong> - You have the right to object to the processing of your personal data in certain circumstances. Please find further details in the box below this section.</li>\n' +
        '  <li>\n' +
        '    <strong>Your right to withdraw consent</strong> - You have the right to withdraw your consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal.</li>\n' +
        '  <li>\n' +
        '    <strong>Your right to data portability</strong> - You have the right to ask that we transfer the information you gave us to another organisation, or to you, in certain circumstances.</li>\n' +
        '  <li>You are not required to pay any charge for exercising your rights. If you make a request, we have one month to respond to you.</li>\n' +
        '  <li>Please reach out for us at the contact details indicated on the Website if you wish to make a request.</li>\n' +
        '  <li><strong>Your right to file a complaint</strong></li>\n' +
        '  <li>You can also complain to a data protection authority if you do not agree on how we have used your data.</li>\n' +
        '</ul>\n' +
        '<strong>You have the right to object, on grounds relating to your particular situation, at any time to processing of personal data concerning you which is based on Article 6(1)(e) or (f) GDPR; this also applies to profiling based on those provisions. The Controller shall no longer process the personal data unless the Controller demonstrates compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject or for the establishment, exercise or defence of legal claims. </strong> <strong>If the personal data concerning you are processed for direct marketing purposes, you have the right to object at any time without giving reasons to the processing of the personal data concerning you for such marketing, which includes profiling to the extent that it is related to such direct marketing. </strong>\n' +
        '<h2>XI. Amendments to this privacy notice</h2>\n' +
        'Due to the dynamic development of the Internet, new technologies and possibilities are constantly developing. To enable us to offer you these possibilities and technologies, we reserve the right to change this privacy notice for the future when introducing new, additional or when changing or extending existing services or service elements. If the change to the privacy notice only affects the use of data in a general form and do not affect the use of data within the scope of a user account, the new privacy notice shall apply from the date of its update on the Website. A change of the privacy notice, which refers to the use of the data already collected and stored in your User account shall only take place if this is reasonably acceptable for you. If and to the extent that changes to the privacy notice reflect on the use of data already collected and stored in your user account, we will notify you in good time via e-mail, on our Website, or in any other suitable way. You have the right to object to the new privacy notice within six weeks of receiving the notification. In the event of an objection, we reserve the right to delete your user account. If no objection is raised, the amended privacy notice shall become effective for you. We will inform about your right to object and about the consequences thereof in the amendment notice.\n' +
        '\n'
    },
  };

  translationsTerms: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'terms of Use'},
    '2': {
      id: '2',
      language: 'en',
      content: '\n' +
        '<p><em>The website </em><a href="https://www.g2esports.com"><em>www.g2esports.com</em></a><em> (hereinafter: “Website”) is provided and maintained by G Esports Holding GmbH (hereinafter referred to as “We” or “Provider”). Further information about the provider can be found in the imprint section. </em></p>\n' +
        '<h2>I. Common provisions</h2>\n' +
        '<ol>\n' +
        '  <li>\n' +
        '    <strong>Service description and scope</strong>\n' +
        '    <ul>\n' +
        '      <li>On our Website, We make available to users (hereinafter “Users”, “You”) information, content and materials about esports, such as news, information regarding competitions, prizes, game reviews etc., as well as a marketplace (“Marketplace”) where Users may purchase goods or services related to the world of esports from third-party vendors.</li>\n' +
        '      <li>In addition, the We offer Users a membership program (“Membership”) against payment of a fee.</li>\n' +
        '      <li>Detailed descriptions of the above-mentioned services can be found within the respective paragraphs within the special-provisions sections.</li>\n' +
        '      <li>By using any of the services on the Website, Users accept these ToU. Link to YouTube ToS can be found <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">here</a>.</li>\n' +
        '      <li>Unless otherwise specified, these ToU fully apply to any use of the Website, including any of the services mentioned above. Special sections II. and III. only apply to the services they refer to.</li>\n' +
        '      <li>These ToU only apply to Users qualifying as consumers. Other Users are kindly requested to contact Us to learn about services available to them and the respective conditions.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li>\n' +
        '    <strong>Age restrictions</strong>\n' +
        '    <ul>\n' +
        '      <li>The use of our Website is age restricted. Users below the age of 16 are not allowed to access the Website or use any of its services.</li>\n' +
        '      <li>Selected services offered on the Website may only be available to Users above a certain age and will be marked accordingly.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li>\n' +
        '    <strong>Prohibited use and indemnification</strong>\n' +
        '    <ul>\n' +
        '      <li>The Website may only be used for the purposes which it is intended for. In particular, the following actions are not allowed:\n' +
        '        <ul>\n' +
        '          <li>using the Website in an abusive, fraudulent, illegal or inappropriate manner or for any other purpose unrelated to the Provider’s services;</li>\n' +
        '          <li>reverse-engineer or decompile Websites or parts thereof;</li>\n' +
        '          <li>copy, collect, scrape, duplicate and distribute the content or information provided on the Website;</li>\n' +
        '          <li>abuse of the Website in a way that imposes an unreasonably burden on the infrastructure or provokes its malfunction;</li>\n' +
        '          <li>violate or attempt to violate security measures used in the Website;</li>\n' +
        '        </ul>\n' +
        '      </li>\n' +
        '      <li>Users commit to indemnify the Provider against any claims asserted by third parties against the Provider due to or in connection with their use of the Website for purposes other than those intended or in breach of these ToS, including the legal costs incurred for the defence.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '</ol>\n' +
        '<ol start="4">\n' +
        '  <li>\n' +
        '    <strong>Technical requirements</strong>\n' +
        '    <ul>\n' +
        '      <li>The Provider implements current and common technologies. In order to take full advantage of the Website, Users must adopt such current and common technologies, too. The use of older or not common technologies may result in limited availability or unavailability of the services governed by these ToU.</li>\n' +
        '      <li>Further or more detailed technical requirements for using the Website may be specified on the Website itself.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li>\n' +
        '    <strong>Intellectual Property</strong>\n' +
        '    <ul>\n' +
        '      <li>The Provider or its licensors are exclusively entitled to all rights in the Website and its content (e.g. images, designs, texts, logos, software, trademarks, registered designs), including any intellectual property rights (copyrights, trademarks or patents). Users acknowledge and accept that they are granted a license to use such content only to the extent and for the purposes of using the Website in accordance with these ToS.</li>\n' +
        '      <li>In particular, Users may not sell, copy, transfer, distribute, modify, alter, imitate or exploit the Website content in any way not expressly permitted by these ToS or otherwise implied in the intended use of the Website.</li>\n' +
        '      <li>Any use of the Website not expressly permitted by these ToU requires the Provider’s prior consent in writing.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li>\n' +
        '    <strong>User accounts</strong>\n' +
        '    <ul>\n' +
        '      <li>Users may create User accounts by providing the requested information via the respective registration form on the Website in a complete and truthful manner. Personal data required in order to create a User account include:</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '</ol>\n' +
        '<ul>\n' +
        '  <li>name, e-mail address: We need this information to create an account and to communicate with Users;</li>\n' +
        '  <li>last name, address: We need this information to close contracts with Users and issue invoices;</li>\n' +
        '  <li>age: We need this information to make that We do not process personal data of Users below 16.\n' +
        '    <ul>\n' +
        '      <li>Further information or personal data may be provided on a voluntary basis.</li>\n' +
        '      <li>Users are responsible for keeping their login credentials confidential and safe. For this reason, Users are also required to choose passwords that meet the highest safety standards supported on our Website.</li>\n' +
        '      <li>By creating a User account, You accept full responsibility for all activities that may take place under Your username and password. You are required to immediately and unambiguously inform Us if You think that Your personal information, including Your account, access credentials or personal data, have been violated, unduly disclosed or stolen.</li>\n' +
        '      <li>We explicitly reserve the right to suspend or delete User accounts at our own discretion where any activity performed under a User account may violate statutory law, infringe third-party rights or otherwise endanger or impair our legitimate interests.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '</ul>\n' +
        '<h2>II. Special provisions applicable to the Marketplace</h2>\n' +
        '<ol start="7">\n' +
        '  <li>\n' +
        '    <strong>Provision of infrastructure</strong>\n' +
        '    <ul>\n' +
        '      <li>Via the Marketplace Users may purchase goods or services (“Products”) from third-party vendors. The use of the Marketplace itself is free of charge.</li>\n' +
        '      <li>We do not sell or offer for sale any Products via the Marketplace. Our service merely consists in making available a technological infrastructure allowing third-party vendors (“Vendors”) to offer Products to Users and Users to purchase them.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li>\n' +
        '    <strong>Contract conclusion and liability</strong>\n' +
        '    <ul>\n' +
        '      <li>Any contract regarding the purchase of Products closed over the Marketplace is therefore solely entered into by the User and the respective Vendor.</li>\n' +
        '      <li>We do not control, monitor, moderate or inspect any Products offered by Vendors via the Marketplace and do therefore not bear any responsibility in connection with such Products, including but not limited to their quality, safety, accuracy, or the Vendors’ ability to provide them.</li>\n' +
        '      <li>The limitation of liability extends in particular to\n' +
        '        <ul>\n' +
        '          <li>any pre-contractual statement, claim or description of the Products offered through the Marketplace;</li>\n' +
        '          <li>the existence of any applicable license, authorisation, qualification or other official permit allowing Vendors to offer specific goods or services, as may be required by applicable law;</li>\n' +
        '          <li>any claim based on partial, incorrect or failed performance of contracts entered via the Marketplace;</li>\n' +
        '          <li>any characteristics of the Products, including their merchantability according to applicable law and their suitability for a determined audience and/or age.</li>\n' +
        '        </ul>\n' +
        '      </li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '</ol>\n' +
        '<ol start="9">\n' +
        '  <li>\n' +
        '    <strong>Purchasing process</strong>\n' +
        '    <ul>\n' +
        '      <li>To Purchase Products from a Vendor Users must select them and thereby place them into their virtual shopping cart. Once they have done so, they may review their selection from within their shopping cart section or confirm it.</li>\n' +
        '      <li>To proceed to check-out, Users must either log-into their User account (if any) or proceed “as guests”. In the former case, the purchasing process will automatically be populated with the data extracted from the User account. In the latter case, Users will have to provide the following data to proceed to check-out: name, last name, address, e-mail address.</li>\n' +
        '      <li>In addition to the above, Users must choose a method of payment among those available. The Provider does not process payments and does therefore not collect any payment data from Users.</li>\n' +
        '      <li>After the above-mentioned data has been specified, Users can review their order and – if necessary – correct any errors, integrate missing information or go back.</li>\n' +
        '      <li>To place the order, Users must accept the terms of sale provided by the relevant Vendor and click on the respective button. The contract with the relevant Vendor is closed upon submission of the order.</li>\n' +
        '      <li>Upon order submission, Users will receive an email confirmation of the order.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li>\n' +
        '    <strong>Mandatory information, fulfilment</strong>\n' +
        '    <ul>\n' +
        '      <li>Any mandatory information in connection with the sale of Products – such as information about the Vendor, about the Product’s characteristics, prices, applicable guarantees, right of withdrawal, delivery restrictions etc. – will be made available to Users during the purchasing process or, as the case may be, after placing the order by each relevant Vendor. We as Marketplace Provider do not bear any responsibility in connection with the provision of such information.</li>\n' +
        '      <li>The entire fulfilment of orders is handled by the Vendor and its agents. Users are invited to contact the relevant Vendor in case of any questions, complaints or claims regarding Products offered or purchased. The Provider does not bear any responsibility in connection with the fulfilment of orders.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '</ol>\n' +
        '<h2>III. Terms of Sale (“ToS”) applicable to the Membership</h2>\n' +
        '<ol start="11">\n' +
        '  <li>\n' +
        '    <strong>Service description</strong>\n' +
        '    <ul>\n' +
        '      <li>Through Your User account on the Website, You have the possibility to subscribe one of the following Membership plans:</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '</ol>\n' +
        '<ul>\n' +
        '  <li>Soldier: free of charge, includes (without limitation) access to selected special content of our Website such as videos, game and match updates, quizzes, giveaways and early bird offers available on the Marketplace;</li>\n' +
        '  <li>Officer: against payment of a fee, includes, in addition to the above (and without limitation), access to further special content, special offers on selected items available on the Marketplace, 5% discounts on a restricted amount of Marketplace items, giveaways, participation in basic team decisions, special treatment on live events;</li>\n' +
        '  <li>Commander: against payment of a fee, includes, in addition to the above (and without limitation), access to further special content, special offers on selected items available on the Marketplace, 10% discount on a restricted amount of Marketplace items; further giveaways, participation in core team decisions, discounts on tickets for live events;\n' +
        '    <ul>\n' +
        '      <li>The full description of each Membership plan and of the applicable prices and conditions is available on the Website during the purchasing process and, after purchase, from within Your User account, and forms integrating and binding part of these ToS.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '</ul>\n' +
        '<ol start="12">\n' +
        '  <li>\n' +
        '    <strong>Purchasing process</strong>\n' +
        '    <ul>\n' +
        '      <li>In order to subscribe to a paid Membership, Users must select the desired plan and log into their User account – if any – or create one by providing the required information. After this, Users must choose a method of payment among those available on the Website.</li>\n' +
        '      <li>Users may then review their order, modify, correct it or go back to a previous step. To submit the order, Users must accept these ToS, accept the waiver of the right of withdrawal and click on the relevant button. The contract is closed upon submission of the order.</li>\n' +
        '      <li>Upon order submission, Users will receive an email confirmation of the order. Such email will also include an order summary and these ToU and the information about the right of withdrawal on a durable medium.</li>\n' +
        '      <li>The chosen subscription plan will be activated as soon as payment is received. The User shall bear any costs possibly arising to the Provider due to failed payments attributable to the User.</li>\n' +
        '      <li>Contracts are closed in English. The wording of the contract will not be stored by us.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li>\n' +
        '    <strong>Autorenewal and termination</strong>\n' +
        '    <ul>\n' +
        '      <li>All our subscriptions are automatically renewing. This means that upon expiration of the initial term, the subscription will be extended for another equal term at equal conditions, unless You terminate the subscription.</li>\n' +
        '      <li>To terminate a subscription You must send Us an unambiguous notice of termination using the contact details specified on our Website or from within Your User account.</li>\n' +
        '      <li>Terminations become effective by the end of the subscription term during which the notice is received.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li>\n' +
        '    <strong>Information about the right of withdrawal</strong>\n' +
        '    <ul>\n' +
        '      <li>You have the right to withdraw from the subscription contract within fourteen days of contract conclusion without stating reasons. In order to exercise Your right of withdrawal, You must inform us by means of an unambiguous notice (e.g. a letter, fax or e-mail sent by post) of Your decision to withdraw from this contract. You may use the attached template withdrawal form below for this purpose, but this is not mandatory.</li>\n' +
        '      <li>The deadline to exercise Your right of withdrawal is met as long as You submit us the withdrawal notice before withdrawal period expires.</li>\n' +
        '      <li><u>Effects of withdrawal</u></li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '</ol>\n' +
        '<p>If You withdraw from the contract, We shall refund all payments We have received from You immediately and no later than fourteen days from the date We receive Your withdrawal notice. Refunds will be done with the same payment method used for the original transaction, unless expressly agreed otherwise with You; in no case will You be charged any fees for this refund.</p>\n' +
        '<ul>\n' +
        '  <li>If You have asked Us to start the provision of our services during the withdrawal period, You shall pay Us a reasonable amount corresponding to the portion of the services already provided by the time You inform Us of the exercise of the right of withdrawal compared to the total value of services provided under the Agreement.</li>\n' +
        '  <li><strong><u>Waiver of the right of withdrawal</u></strong></li>\n' +
        '</ul>\n' +
        '<p><strong>Please note that, when subscribing one of our paid Membership plans, You explicitly request that We begin performing our service immediately (i.e. before the withdrawal period expires) and thereby acknowledge that You will lose Your right of withdrawal once the contract has been fully performed by Us.</strong></p>\n' +
        '<h2>IV. Closing provisions</h2>\n' +
        '<ul>\n' +
        '  <li>\n' +
        '    <strong>Limitation of liability</strong>\n' +
        '    <ul>\n' +
        '      <li>Unless otherwise explicitly stated and without prejudice to applicable statutory product liability provisions, Users shall have no right to claim damages against Us (or any natural or legal person acting on Our behalf).</li>\n' +
        '      <li>The above does not apply to damages to life, health or physical integrity, damages resulting from the breach of an essential contractual obligation such as any obligation strictly necessary to achieve the purpose of the contract, and/or damages resulting from intent or gross negligence, as long as our services have been appropriately and correctly used by the User.</li>\n' +
        '      <li>Unless damages have been caused by way of intent or gross negligence, or they affect life, health or physical integrity, We shall only be liable to the extent of typical and foreseeable damages at the moment the contract was entered into.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '  <li>\n' +
        '    <strong>Miscellaneous</strong>\n' +
        '    <ul>\n' +
        '      <li>Users have no enforceable claim to use the Website provided. In particular, the Provider reserves the right to change, revise, discontinue or completely withdraw the Website or single functions thereof from circulation at any time.</li>\n' +
        '      <li>Similarly, the Provider reserves the right to change these ToU at any time. In the event of changes to the ToU, You will be informed about the amended ToU when loading the Website. In case You object to the amended ToU, You must refrain from using the Website and its services. The continued use of the Website shall be deemed as acceptance of the amended ToU.</li>\n' +
        '      <li>As far as legally permissible, these ToU between the Provider and Users are governed by German law, without prejudice to any possible higher consumer protection level awarded by the laws of the country in which the User is domiciled.</li>\n' +
        '      <li>The Provider does not participate in any alternative dispute resolution proceedings before a consumer arbitration body pursuant to the Consumer Dispute Settlement Act (Verbraucherstreitbeilegungsgesetz).</li>\n' +
        '      <li>These ToU shall remain effective in case single provisions should be deemed invalid. The invalid provisions shall be replaced by the statutory provisions, if available. However, should this result in an unreasonable hardship for one of the parties, the ToU shall become invalid in their entirety.</li>\n' +
        '    </ul>\n' +
        '  </li>\n' +
        '</ul>\n'
    },
  };

  translationsViewArticle: { [key: string]: Translation } = {
    '1': {id: '1', language: 'en', content: 'Spread the news'},
  };
}
