import {Component } from '@angular/core';
import { Certification } from '../Models/certificates';
import { CertificateService } from '../Services/certificate.service';

@Component({
  selector: 'ngx-certificates',
  styleUrls: ['./certificates.component.scss'],
  templateUrl: './certificates.component.html',
})
export class CertificatesComponent {
  public certificates: Array<Certification> = [];
  public showNavigationIndicators: Boolean = false;

  constructor(private _certificatesservice: CertificateService) {
    this._certificatesservice.fetchAllCertifiedUser().subscribe((allcertified: Array<Certification>) => {
        this.certificates = allcertified;
      });   
  }

removeFile(url): void {
  const certIndex = this.certificates.findIndex((cert: Certification) => cert.fileUrl === url);
  this.certificates.splice(certIndex, 1);
}

//step 1: Add files
//step 2: add only pdf, jpeg, jpg, png files.
}

