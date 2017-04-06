import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public products: any[] = [
    {
      name: 'Flower Power',
      organization: {
        name: 'Nintendo inc.'
      },
      description: 'Bacon ipsum dolor amet pork loin boudin brisket ham hock, tri-tip strip steak tenderloin prosciutto pancetta frankfurter pork. Strip steak tenderloin pork hamburger capicola bresaola jerky short loin beef ribs tail frankfurter pork belly burgdoggen. Pork loin venison fatback hamburger ball tip t-bone filet mignon pig flank sirloin. Turducken pork chop ribeye salami.',
      logo_url: 'http://europaplus.com.ua/wp-content/photos/2014/09/Nintendo-symbol-228x131.jpg',
      rating: {
        value: 4
      }
    },
    {
      name: 'Aliens',
      organization: {
        name: 'Android'
      },
      description: 'Bacon ipsum dolor amet pork loin boudin brisket ham hock, tri-tip strip steak tenderloin prosciutto pancetta frankfurter pork. Strip steak tenderloin pork hamburger capicola bresaola jerky short loin beef ribs tail frankfurter pork belly burgdoggen. Pork loin venison fatback hamburger ball tip t-bone filet mignon pig flank sirloin. Turducken pork chop ribeye salami.',
      logo_url: 'http://movilarena.com/wp-content/uploads/2010/12/android-logo-310x350.png',
      rating: {
        value: 2
      }
    },
    {
      name: 'Coffee Drinks',
      organization: {
        name: 'Starbucks'
      },
      description: 'Bacon ipsum dolor amet pork loin boudin brisket ham hock, tri-tip strip steak tenderloin prosciutto pancetta frankfurter pork. Strip steak tenderloin pork hamburger capicola bresaola jerky short loin beef ribs tail frankfurter pork belly burgdoggen. Pork loin venison fatback hamburger ball tip t-bone filet mignon pig flank sirloin. Turducken pork chop ribeye salami. Bacon ipsum dolor amet pork loin boudin brisket ham hock, tri-tip strip steak tenderloin prosciutto pancetta frankfurter pork. Strip steak tenderloin pork hamburger capicola bresaola jerky short loin beef ribs tail frankfurter pork belly burgdoggen. Pork loin venison fatback hamburger ball tip t-bone filet mignon pig flank sirloin. Turducken pork chop ribeye salami.',
      logo_url: 'http://pitweston.com/wp-content/uploads/2009/12/starbucks-logo-150x150.jpg',
      rating: {
        value: 2.84
      }
    },
    {
      name: 'Flower Power',
      organization: {
        name: 'Nintendo inc.'
      },
      description: 'Bacon ipsum dolor amet pork loin boudin brisket ham hock, tri-tip strip steak tenderloin prosciutto pancetta frankfurter pork. Strip steak tenderloin pork hamburger capicola bresaola jerky short loin beef ribs tail frankfurter pork belly burgdoggen. Pork loin venison fatback hamburger ball tip t-bone filet mignon pig flank sirloin. Turducken pork chop ribeye salami.',
      logo_url: 'http://europaplus.com.ua/wp-content/photos/2014/09/Nintendo-symbol-228x131.jpg',
      rating: {
        value: 2.84
      }
    },
    {
      name: 'Flower Power',
      organization: {
        name: 'Nintendo inc.'
      },
      description: 'Bacon ipsum dolor amet pork loin boudin brisket ham hock, tri-tip strip steak tenderloin prosciutto pancetta frankfurter pork. Strip steak tenderloin pork hamburger capicola bresaola jerky short loin beef ribs tail frankfurter pork belly burgdoggen. Pork loin venison fatback hamburger ball tip t-bone filet mignon pig flank sirloin. Turducken pork chop ribeye salami.',
      logo_url: 'http://europaplus.com.ua/wp-content/photos/2014/09/Nintendo-symbol-228x131.jpg',
      rating: {
        value: 1
      }
    }
  ];
}
