import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const jsFileUrl = './assets/js/faq.js';
    

    this.loadScript(jsFileUrl).then(() => {
      // Code to run after the script is loaded successfully.
      console.log('Script loaded successfully.');
    }).catch((error) => {
      // Handle error if the script fails to load.
      console.error(error);
    });
  }

  // Function to navigate back to /home when the back arrow is clicked
  goBack(): void {
    this.router.navigate(['/next-page']);
  }

  loadScript(url: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = url;
      scriptElement.type = 'text/javascript';
      scriptElement.async = true;
  
      scriptElement.onload = () => {
        resolve("success");
      };
  
      scriptElement.onerror = () => {
        reject('Failed to load the script');
      };
  
      document.getElementsByTagName('head')[0].appendChild(scriptElement);
    });
  }

}
