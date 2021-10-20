import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { DandelionService } from '../services/dandelion.service';

@Injectable({providedIn: 'root'})
export class ValidTokenGuard implements CanActivate {
    constructor(
        private dandelion: DandelionService,
        private router: Router
    ) { }

    canActivate() {
        if (!this.dandelion.apiToken) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}