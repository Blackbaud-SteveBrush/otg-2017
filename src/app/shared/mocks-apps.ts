import { Application } from './models/application';
import { Organization } from './models/organization';
import { Rating } from './models/rating';

export const Applications: Application[] = [
    {
      id: 1,
      name: 'BizInsight for Raiser’s Edge',
      description: 'BizInsight leverages the power of Microsoft Excel to help you get the answers you need from your data. It allows users to share reports in multiple formats or connect to an ever-growing list of ERPs.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/biznet.png',
      organization: new Organization(1, 'BizNetsoftware (Connecting Your World to Excel)'),
      tags: [
        'Fundraising',
        'Financial',
        'Analytics'
      ],
      rating_total: new Rating(null, null, 4),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 2,
      name: 'MaxxVault Enterprise',
      description: 'MaxxVault manages documents to improve organizational efficiency, reduce physical storage, and meet compliance and security standards. It increases companywide sharing of information and improves business processes.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/maxxvault.png',
      organization: new Organization(2, 'MaxxVault'),
      tags: [
        'Storage',
        'Education',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4.5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 3,
      name: 'VolunteerHub Integration with The Raiser’s Edge',
      description: 'VolunteerHub Integration is a web-based volunteer management platform that synchronizes volunteer data in your CRM. It converts volunteers into constituents and converts hours to timesheets.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/volunteerhub.png',
      organization: new Organization(3, 'Carr Engineering, Inc.'),
      tags: [
        'Volunteer',
        'Data',
        'constituents'
      ],
      rating_total: new Rating(null, null, 5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 4,
      name: 'SmartMETRICS',
      description: 'SmartMETRICS adds metrics to your Raiser’s Edge database and allows you to track engagement scores or the likelihood to donate over time. Users specify their own formula and criteria to create scores for records.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/smartthing.png',
      organization: new Organization(4, 'SmartTHING'),
      tags: [
        'Analytics',
        'Donations',
        'constituents'
      ],
      rating_total: new Rating(null, null, 4),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 5,
      name: 'Social Network Sync',
      description: 'Social Network Sync links your database with alumni information from social media sites. It allows you to pull in near-real time updates on career, location, and contact information.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/aluminati.png',
      organization: new Organization(5, 'Aluminati Network Group'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4.5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 6,
      name: 'Premium Email for Life',
      description: 'Social Network Sync links your database with alumni information from social media sites. It allows you to pull in near-real time updates on career, location, and contact information.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/aluminati.png',
      organization: new Organization(5, 'Aluminati Network Group'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 7,
      name: 'Aluminate Engagement Platform',
      description: 'Alluminate provides a secure, user-friendly online portal to facilitate networking among your alumni community. It allows alumni to search for other alumni and engage them through interactions.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/aluminati.png',
      organization: new Organization(5, 'Aluminati Network Group'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 8,
      name: 'PEX',
      description: 'PEX manages control employee and volunteer expenses without the hassles of cash, credit cards, or reimbursements. The expense management solution utilizes prepaid debit cards to control all aspects of employee spending.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/PEX.png',
      organization: new Organization(6, 'Prepaid Expense Card Solutions, Inc.'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4.5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 9,
      name: 'SmartZIP',
      description: 'SmartZIP autocompletes domestic and international addresses to ensure that addresses entered in Blackbaud NetCommunity, Blackbaud Internet Solutions, and Blackbaud CRM is completely accurate.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/smartthing.png',
      organization: new Organization(4, 'SmartTHING'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 10,
      name: 'E-Membership Cards',
      description: 'E-Membership Cards automates the electronic delivery of new and renewed membership cards on member phones for Altru and The Raiser’s Edge. It also automates renewal reminders.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/museumanywhere.png',
      organization: new Organization(7, 'Museum Anywhere'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 11,
      name: 'The Mergician',
      description: 'The Mergician simplifies the process of locating duplicate records and allows you to merge them in bulk. You can set criteria to control which areas of records to merge and decide which constituents to merge.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/zeidman.png',
      organization: new Organization(8, 'Zeidman Development'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4.5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 12,
      name: 'SmartGMAIL',
      description: 'SmartGMAIL integrates Goggle Mail Services with The Raisers Edge and Raisers Edge NXT. It allows you to save Gmail information to the database as actions and edit it before you save it to the database.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/smartthing.png',
      organization: new Organization(4, 'SmartTHING'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 13,
      name: 'SmartSOCIAL',
      description: 'SmartSOCIAL ensures that you have the latest, most accurate information about your supporters. It connects LinkedIn social data to your Raiser’s Edge, Raiser’s Edge NXT, or Blackbaud CRM database.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/smartthing.png',
      organization: new Organization(4, 'SmartTHING'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 14,
      name: 'SmartOUTLOOK',
      description: 'SmartGMAIL integrates Microsoft Outlook with The Raisers Edge, Raisers Edge NXT, and Blackbaud CRM. It allows you to save Outlook information to the database as actions and edit it before you save it to the database.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/smartthing.png',
      organization: new Organization(4, 'SmartTHING'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4.5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 15,
      name: '@pay',
      description: '@pay provides Blackbaud customers with a text-to-give option that helps fundraisers where they need it most. It facilitates and encourages repeat donations and enables, and it is easy, safe, and secure.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/%40pay.png',
      organization: new Organization(9, '@pay LLC'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 16,
      name: 'ImportOmatic',
      description: 'ImportOmatic provides super-fast, reliable data imports into The Raiser’s Edge. It eliminates manual processes and improves data integrity in your database.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/omatic.png',
      organization: new Organization(10, 'Omatic Software'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 17,
      name: 'JCA Answers for The Raiser’s Edge',
      description: 'JCA Answers is a complete business intelligence solution for The Raiser’s Edge. It provides state-of-the-art visualizations and dashboards the for nontechnical users to help them make data-driven decisions.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/jca.png',
      organization: new Organization(11, 'JCA Consulting '),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4.5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 18,
      name: 'Super Importer & Exporter for RE',
      description: 'The JMG Solutions Super Importer and Exporter allows you to import data into The Raiser’s Edge quickly and easily. It imports data from CSV, SQL Server, or other databases, and it simplifies data cleanup.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/JMGsolutions.png',
      organization: new Organization(12, 'JMG Solutions'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 19,
      name: 'GIVINGTREE',
      description: 'GivingTree helps you identify, prioritize, and manage fundraising prospects. It helps to optimize your social and marketing strategies based on what content performs best with donors and which donors engage in real-time.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/evertrue.png',
      organization: new Organization(13, 'EverTrue, Inc.'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 20,
      name: 'Importacular',
      description: 'Importacular integrates all of your data from across the web and allows you to import it directly into The Raiser’s Edge. It connects The Raiser’s Edge to your favorite web services and pulls in data without ever touching a CSV file.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/zeidman.png',
      organization: new Organization(8, 'Zeidman Development'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4.5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 21,
      name: 'Audit Trail',
      description: 'Audit Trail tracks changes to your Raiser’s Edge database and helps undo mistakes as they happen. It uses sophisticated sort and filtering options to track global changes and also track user login and logout times.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/zeidman.png',
      organization: new Organization(8, 'Zeidman Development'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 22,
      name: 'PaperSave for Raiser’s Edge',
      description: 'PaperSave saves time and reduces costs by electronically storing and retrieving documents. It captures information from gift documents and stores them in the PaperSave database that is accessible through Rasier’s Edge records.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/papersave.png',
      organization: new Organization(14, 'PaperSave'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 23,
      name: 'EzesSan',
      description: 'Ezescan simplifies donation processing with advanced automated data capture and native integration with The Raiser’s Edge. It handles hard copy and electronic remittances in your donation and gift-processing workflows.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/ezescan.png',
      organization: new Organization(15, 'Outback Imaging LLC'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4.5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 24,
      name: 'SmartTELETHON',
      description: 'SmartTELETHON  is complete fundraising system for Blackbaud NetCommunity and Blackbaud Internet Solutions that is compatible with The Raiser’s Edge, Blackbaud CRM, and Blackbaud Merchant Services.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/smartthing.png',
      organization: new Organization(4, 'SmartTHING'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 25,
      name: 'I-texts Zero Cost Fundraising',
      description: 'I-texts provides an opt-in text and email service that generates donations from texts and emails. Donations are generated from paid advertising and commissions on product and service offers.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/itexts.png',
      organization: new Organization(16, 'I-texts, Inc.'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4.5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 26,
      name: 'Facebook Power Tools',
      description: 'Facebook Power Tools helps nonprofits reach and engage more passionate supporters on Facebook. They can use it to grow their email lists, cultivate donors, and increase Facebook engagement.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/actionsprout.png',
      organization: new Organization(17, 'ActionSprout'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 27,
      name: 'Data Discovery & Predictive Analytics',
      description: 'Data Discovery & Predictive Analytics provides easy-to-use technology to identify key metrics and implement data-driven decision-making. It creates a culture of analytics through interactive data visualizations, predictive modeling, and other tools.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/advizor.png',
      organization: new Organization(18, 'ADVIZOR Solutions, Inc.'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 28,
      name: 'BoldTypeNews Professional',
      description: 'BoldTypeNews Professional provides timely news information about your donors to help foster long-term relations ships and increase donations. It reviews millions of news articles to find stories about your constituents.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/boldtypenews.png',
      organization: new Organization(19, 'BoldType News, Inc.'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4.5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 29,
      name: 'HALO Non-profit Solutions',
      description: 'HALO Non-profit Solutions simplifies and streamlines the process of rewarding your volunteers and donors. It provides incentive and recognition programs to integrate with your fundraising efforts.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/halo.png',
      organization: new Organization(20, 'HALO Branded Solutions'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 30,
      name: 'Postcard Impact',
      description: 'Postcard Impact is a supporter engagement platform for nonprofits. It helps nonprofit supporters drive social movements by creating postcards that are printed and delivered en masse to the real world and then shared online.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/postcard.png',
      organization: new Organization(21, 'Postcard'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 4.5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
    },
    {
      id: 31,
      name: 'Automated Calling Software',
      description: 'Automated Calling Software provides an automated calling service that saves nonprofits the time, headaches, and stress associated with contacting all of the constituents on their list.',
      logo_url: 'https://bbotgapr2017.blob.core.windows.net/samus/callemall.png',
      organization: new Organization(22, 'Call-Em-All'),
      tags: [
        'Education',
        'Some Tag',
        'Some Tag'
      ],
      rating_total: new Rating(null, null, 5),
      ratings: [new Rating(null, "This is a super sweet app!", 4), new Rating(null, "This app is ok, but I've seen better.", 2.5), new Rating(null, "This app is literally garbage. If I could, I would throw it in the trash can.", 1)]
     }
];
