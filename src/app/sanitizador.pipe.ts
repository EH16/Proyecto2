import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizador'
})
export class SanitizadorPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(URL: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(URL);
  }

}
