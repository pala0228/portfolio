import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  /**
   * @ignore
   */
  sendEmailForm: FormGroup;
  /**
   * @ignore
   */
  toastMessage = null;
  /**
   * @ignore
   */
  toastMessageToggle = false;
  /**
   * @ignore
   */
  toggleButtonMessage = false;
  /**
   * @ignore
   */
  toastMessageSuccess: boolean;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.sendEmailForm = new FormGroup({
      user_name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9 ]+$/)]),
      user_email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }
  /**
   * @ignore
   */
  onSendEmail() {
    if (this.sendEmailForm.invalid) {
      return;
    }
    this.toastMessageToggle = false;
    this.toggleButtonMessage = true;
    // creating required input data
    const templateParams = {
      user_name: this.sendEmailForm.get('user_name').value,
      message: this.sendEmailForm.get('message').value,
      user_email: this.sendEmailForm.get('user_email').value
    };
    // sending email through javascript
    emailjs.send(environment.service_id, environment.emailTemplate_Id, templateParams, environment.emailJs_userId)
      .then((response) => {
        this.toastMessageToggle = true;
        this.toastMessageSuccess = true;
        this.toggleButtonMessage = false;
        this.toastMessage = 'Thank you for your messsage. I will take a look and respond back..!';
        this.changeDetectorRef.detectChanges();
        this.sendEmailForm.reset();
        setTimeout(() => {
          this.onClose();
        }, 5000);
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        this.toastMessageToggle = true;
        this.toastMessageSuccess = false;
        this.toggleButtonMessage = false;
        this.toastMessage = 'Oops something went wrong. Let me take a look. Thanks for your valuable time..!'
        setTimeout(() => {
          this.onClose();
        }, 5000);
        console.log('FAILED...', error);
      });
  }
  /**
   * @ignore
   */
  onResetForm() {
    this.sendEmailForm.reset();
  }
  /**
   * @ignore
   */
  onClose() {
    this.toastMessageToggle = false;
    this.toggleButtonMessage = false;
    this.sendEmailForm.reset();
    this.changeDetectorRef.detectChanges();
  }
}
