import { Application } from './models/application';
import { Organization } from './models/organization';
import { Rating } from './models/rating';

export const Applications: Application[] = [
    {
      id: 1,
      name: 'Flower Power',
      description: 'Bacon ipsum dolor amet pork loin boudin brisket ham hock, tri-tip strip steak tenderloin prosciutto pancetta frankfurter pork. Strip steak tenderloin pork hamburger capicola bresaola jerky short loin beef ribs tail frankfurter pork belly burgdoggen. Pork loin venison fatback hamburger ball tip t-bone filet mignon pig flank sirloin. Turducken pork chop ribeye salami.',
      logo_url: 'http://europaplus.com.ua/wp-content/photos/2014/09/Nintendo-symbol-228x131.jpg',
      organization: new Organization(33, 'Nintendo inc.'),
      rating: new Rating(null, 2)
    },
    {
      id: 2, 
      name: 'Alienz',
      description: 'Bacon ipsum dolor amet pork loin boudin brisket ham hock, tri-tip strip steak tenderloin prosciutto pancetta frankfurter pork. Strip steak tenderloin pork hamburger capicola bresaola jerky short loin beef ribs tail frankfurter pork belly burgdoggen. Pork loin venison fatback hamburger ball tip t-bone filet mignon pig flank sirloin. Turducken pork chop ribeye salami.',
      logo_url: 'http://movilarena.com/wp-content/uploads/2010/12/android-logo-310x350.png',
      organization: new Organization(23, 'Android'),
      rating: new Rating(null, 4.5)
    },
    {
      id: 3,
      name: 'Coffee Drinks',
      description: 'Bacon ipsum dolor amet pork loin boudin brisket ham hock, tri-tip strip steak tenderloin prosciutto pancetta frankfurter pork. Strip steak tenderloin pork hamburger capicola bresaola jerky short loin beef ribs tail frankfurter pork belly burgdoggen. Pork loin venison fatback hamburger ball tip t-bone filet mignon pig flank sirloin. Turducken pork chop ribeye salami. Bacon ipsum dolor amet pork loin boudin brisket ham hock, tri-tip strip steak tenderloin prosciutto pancetta frankfurter pork. Strip steak tenderloin pork hamburger capicola bresaola jerky short loin beef ribs tail frankfurter pork belly burgdoggen. Pork loin venison fatback hamburger ball tip t-bone filet mignon pig flank sirloin. Turducken pork chop ribeye salami.',
      logo_url: 'http://pitweston.com/wp-content/uploads/2009/12/starbucks-logo-150x150.jpg',
      organization: new Organization(14, 'Starbucks'),
      rating: new Rating(null, 2.84)
    },
    {
      id: 4,
      name: 'Flower Power',
      description: 'Bacon ipsum dolor amet pork loin boudin brisket ham hock, tri-tip strip steak tenderloin prosciutto pancetta frankfurter pork. Strip steak tenderloin pork hamburger capicola bresaola jerky short loin beef ribs tail frankfurter pork belly burgdoggen. Pork loin venison fatback hamburger ball tip t-bone filet mignon pig flank sirloin. Turducken pork chop ribeye salami.',
      logo_url: 'http://europaplus.com.ua/wp-content/photos/2014/09/Nintendo-symbol-228x131.jpg',
      organization: new Organization(33, 'Nintendo inc.'),
      rating: new Rating(null, 2.84)
    },
    {
      id: 5,
      name: 'Flower Power 2',
      description: 'Bacon ipsum dolor amet pork loin boudin brisket ham hock, tri-tip strip steak tenderloin prosciutto pancetta frankfurter pork. Strip steak tenderloin pork hamburger capicola bresaola jerky short loin beef ribs tail frankfurter pork belly burgdoggen. Pork loin venison fatback hamburger ball tip t-bone filet mignon pig flank sirloin. Turducken pork chop ribeye salami.',
      logo_url: 'http://europaplus.com.ua/wp-content/photos/2014/09/Nintendo-symbol-228x131.jpg',
      organization: new Organization(33, 'Nintendo inc.'),
      rating: new Rating(null, 1)

    }
];